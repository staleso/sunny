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

    this.summaryTrigger = this.homey.flow.getTriggerCard('daily_summary');
    this.homey.flow.getActionCard('create_daily_summary').registerRunListener(async () => {
      await this.poll().catch(this.error); // fresh data; fall back to cached events on error
      const today = this.events.filter((e) => isToday(new Date(e.startTimestamp)));
      await this.summaryTrigger.trigger({ text: summary(today), count: today.length });
    });

    this.homey.settings.on('set', (key) => {
      if (key === 'email' || key === 'password') {
        this.client = null;
        this.poll().catch(this.error);
      }
    });

    this.poll().catch(this.error);
    this.homey.setInterval(() => this.poll().catch(this.error), POLL_MS);
  }

  // Used by the dashboard widget.
  getUpcoming(days) {
    const now = Date.now();
    const limit = now + days * 86400000;
    return this.events
      .filter((e) => new Date(e.endTimestamp || e.startTimestamp).getTime() >= now)
      .filter((e) => (days <= 1 ? isToday(new Date(e.startTimestamp)) : new Date(e.startTimestamp).getTime() <= limit))
      .map((e) => ({
        id: e.id,
        start: e.startTimestamp,
        title: e.heading || '',
        group: e.recipients?.group?.name || '',
        location: e.location?.feature || e.location?.address || '',
      }));
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

function summary(events) {
  if (!events.length) return 'Ingen Spond-arrangementer i dag.';
  const n = events.length;
  const parts = events.map((e) => {
    const time = new Date(e.startTimestamp).toLocaleTimeString('nb-NO', { timeZone: 'Europe/Oslo', hour: '2-digit', minute: '2-digit' });
    const t = tokens(e);
    return `Klokken ${time}: ${t.title}${t.group ? `, ${t.group}` : ''}${t.location ? `, på ${t.location}` : ''}.`;
  });
  return `I dag har du ${n} Spond-arrangement${n === 1 ? '' : 'er'}. ${parts.join(' ')}`;
}

function isToday(d) {
  const fmt = (x) => x.toLocaleDateString('nb-NO', { timeZone: 'Europe/Oslo' });
  return fmt(d) === fmt(new Date());
}

module.exports = SpondApp;
