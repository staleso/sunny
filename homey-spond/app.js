'use strict';

const Homey = require('homey');
const Spond = require('./lib/spond');

const POLL_MS = 5 * 60 * 1000;

class SpondApp extends Homey.App {
  async onInit() {
    this.events = [];
    this.knownIds = null; // null until first successful poll (no "new event" spam at startup)
    this.fired = new Set(); // `${eventId}:${minutes}` already triggered

    this.upcomingTrigger = this.homey.flow.getTriggerCard('event_upcoming');
    this.upcomingTrigger.registerRunListener(async (args, state) => args.minutes === state.minutes);
    this.newEventTrigger = this.homey.flow.getTriggerCard('event_new');

    this.homey.flow.getConditionCard('has_event_today')
      .registerRunListener(async () => this.events.some((e) => isToday(new Date(e.startTimestamp))));

    this.homey.flow.getConditionCard('has_event_within')
      .registerRunListener(async (args) => {
        const now = Date.now();
        return this.events.some((e) => {
          const start = new Date(e.startTimestamp).getTime();
          return start >= now && start - now <= args.hours * 3600000;
        });
      });

    this.homey.flow.getActionCard('refresh').registerRunListener(() => this.poll());

    this.homey.settings.on('set', (key) => {
      if (key === 'email' || key === 'password') {
        this.client = null;
        this.poll().catch(this.error);
      }
    });

    this.poll().catch(this.error);
    this.homey.setInterval(() => this.poll().catch(this.error), POLL_MS);
  }

  getClient() {
    const email = this.homey.settings.get('email');
    const password = this.homey.settings.get('password');
    if (!email || !password) return null;
    if (!this.client) this.client = new Spond(email, password);
    return this.client;
  }

  async poll() {
    const client = this.getClient();
    if (!client) {
      this.homey.settings.set('status', 'Ikke konfigurert');
      return;
    }

    try {
      this.events = await client.getEvents();
    } catch (err) {
      this.homey.settings.set('status', `Feil: ${err.message}`);
      throw err;
    }
    this.homey.settings.set('status', `OK – ${this.events.length} kommende arrangement (${new Date().toLocaleString('nb-NO')})`);

    // New events
    const ids = new Set(this.events.map((e) => e.id));
    if (this.knownIds) {
      for (const e of this.events) {
        if (!this.knownIds.has(e.id)) await this.newEventTrigger.trigger(tokens(e)).catch(this.error);
      }
    }
    this.knownIds = ids;

    // Upcoming events, for each minute value used in flows
    const argValues = await this.upcomingTrigger.getArgumentValues();
    const minuteSet = [...new Set(argValues.map((a) => a.minutes))];
    const now = Date.now();
    for (const e of this.events) {
      const until = (new Date(e.startTimestamp).getTime() - now) / 60000;
      for (const minutes of minuteSet) {
        const key = `${e.id}:${minutes}`;
        if (until >= 0 && until <= minutes && !this.fired.has(key)) {
          this.fired.add(key);
          await this.upcomingTrigger.trigger(tokens(e), { minutes }).catch(this.error);
        }
      }
    }
    for (const key of this.fired) if (!ids.has(key.split(':')[0])) this.fired.delete(key);
  }
}

function tokens(e) {
  const start = new Date(e.startTimestamp);
  return {
    title: e.heading || '',
    group: e.recipients?.group?.name || '',
    start: start.toLocaleString('nb-NO', { timeZone: 'Europe/Oslo', dateStyle: 'short', timeStyle: 'short' }),
    location: e.location?.feature || e.location?.address || '',
    description: e.description || '',
  };
}

function isToday(d) {
  const fmt = (x) => x.toLocaleDateString('nb-NO', { timeZone: 'Europe/Oslo' });
  return fmt(d) === fmt(new Date());
}

module.exports = SpondApp;
