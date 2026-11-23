'use strict';

const Homey = require('homey');
const Spond = require('./lib/spond');

const POLL_MS = 5 * 60 * 1000;

class SpondApp extends Homey.App {
  async onInit() {
    this.events = [];
    this.knownIds = null; // null until first successful poll (no "new event" spam at startup)
    this.fired = new Set(); // `${eventId}:${minutes}` already triggered

    // Global tags (usable in any flow, like device tags)
    this.tags = {};
    const tagDefs = {
      summary: ['string', 'Spond: dagens oppsummering'],
      reminder: ['string', 'Spond: siste påminnelse'],
      newest: ['string', 'Spond: nyeste arrangement'],
      unanswered: ['number', 'Spond: ubesvarte arrangementer'],
    };
    for (const [id, [type, title]] of Object.entries(tagDefs)) {
      this.tags[id] = await this.homey.flow.createToken(id, { type, title, value: type === 'number' ? 0 : '' })
        .catch((err) => { this.error(err); return null; });
    }

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

    this.homey.flow.getConditionCard('has_unanswered')
      .registerRunListener(async () => this.unansweredCount() > 0);

    this.homey.flow.getActionCard('refresh').registerRunListener(() => this.poll());

    this.summaryTrigger = this.homey.flow.getTriggerCard('daily_summary');
    this.homey.flow.getActionCard('create_daily_summary').registerRunListener(async () => {
      await this.poll().catch(this.error); // fresh data; fall back to cached events on error
      const today = this.events.filter((e) => isToday(new Date(e.startTimestamp)));
      const unanswered = this.unansweredCount();
      await this.setTag('summary', summary(today, unanswered));
      await this.summaryTrigger.trigger({
        text: summary(today, unanswered),
        count: today.length,
        unanswered,
      });
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

  // Member ids (per group) that belong to me or to someone I'm guardian for. Refreshed hourly.
  async refreshMyMemberIds(client) {
    if (this.myMemberIds && Date.now() - this.myMemberIdsAt < 3600000) return;
    const profile = await client.getProfile();
    const groups = await client.getGroups();
    const ids = new Map(); // memberId -> first name
    for (const g of groups) {
      for (const m of g.members || []) {
        const mine = m.profile?.id === profile.id || (m.guardians || []).some((x) => x.profile?.id === profile.id);
        if (mine) ids.set(m.id, m.firstName || m.profile?.firstName || '');
      }
    }
    this.myMemberIds = ids;
    this.myMemberIdsAt = Date.now();
  }

  isUnanswered(e) {
    if (!this.myMemberIds) return false;
    const pending = [...(e.responses?.unansweredIds || []), ...(e.responses?.unconfirmedIds || [])];
    return pending.some((id) => this.myMemberIds.has(id));
  }

  // Names of my members (me/my children) invited to the event who haven't declined.
  whoFor(e) {
    if (!this.myMemberIds) return '';
    const r = e.responses || {};
    const declined = new Set(r.declinedIds || []);
    const invited = [
      ...(r.acceptedIds || []), ...(r.unansweredIds || []),
      ...(r.unconfirmedIds || []), ...(r.waitinglistIds || []),
    ];
    const names = [...new Set(invited)]
      .filter((id) => !declined.has(id) && this.myMemberIds.has(id))
      .map((id) => this.myMemberIds.get(id))
      .filter(Boolean);
    return joinNames([...new Set(names)]);
  }

  unansweredCount() {
    return this.events.filter((e) => e.unanswered).length;
  }

  async setTag(id, value) {
    if (this.tags[id]) await this.tags[id].setValue(value).catch(this.error);
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
        unanswered: !!e.unanswered,
        who: e.who || '',
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
      await this.refreshMyMemberIds(client).catch(this.error);
      for (const e of this.events) {
        e.unanswered = this.isUnanswered(e);
        e.who = this.whoFor(e);
      }
    } catch (err) {
      this.homey.settings.set('status', `Feil: ${err.message}`);
      throw err;
    }
    this.homey.settings.set('status', `OK – ${this.events.length} kommende arrangement (${new Date().toLocaleString('nb-NO')})`);
    await this.setTag('unanswered', this.unansweredCount());

    // New events
    const ids = new Set(this.events.map((e) => e.id));
    if (this.knownIds) {
      for (const e of this.events) {
        if (!this.knownIds.has(e.id)) {
          await this.setTag('newest', `Nytt Spond-arrangement: ${describe(e)}`);
          await this.newEventTrigger.trigger(tokens(e)).catch(this.error);
        }
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
          await this.setTag('reminder', `Påminnelse fra Spond. ${describe(e)}`);
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
    who: e.who || '',
    group: e.recipients?.group?.name || '',
    start: start.toLocaleString('nb-NO', { timeZone: 'Europe/Oslo', dateStyle: 'short', timeStyle: 'short' }),
    location: e.location?.feature || e.location?.address || '',
    description: e.description || '',
  };
}

function summary(events, unanswered = 0) {
  const tail = unanswered
    ? ` Du har ${unanswered} ubesvart${unanswered === 1 ? '' : 'e'} Spond-arrangement${unanswered === 1 ? '' : 'er'}.`
    : '';
  return todaySummary(events) + tail;
}

function todaySummary(events) {
  if (!events.length) return 'Ingen Spond-arrangementer i dag.';
  const n = events.length;
  const parts = events.map((e) => {
    const time = new Date(e.startTimestamp).toLocaleTimeString('nb-NO', { timeZone: 'Europe/Oslo', hour: '2-digit', minute: '2-digit' });
    const t = tokens(e);
    return `Klokken ${time}: ${t.title}${e.who ? ` for ${e.who}` : ''}${t.group ? `, ${t.group}` : ''}${t.location ? `, på ${t.location}` : ''}.`;
  });
  return `I dag har du ${n} Spond-arrangement${n === 1 ? '' : 'er'}. ${parts.join(' ')}`;
}

// "Trening for Thomas i G12 Fotball, mandag 24. november klokken 18:00, på Kunstgressbanen."
function describe(e) {
  const d = new Date(e.startTimestamp);
  const time = d.toLocaleTimeString('nb-NO', { timeZone: 'Europe/Oslo', hour: '2-digit', minute: '2-digit' });
  const day = isToday(d) ? 'i dag' : d.toLocaleDateString('nb-NO', { timeZone: 'Europe/Oslo', weekday: 'long', day: 'numeric', month: 'long' });
  const t = tokens(e);
  return `${t.title}${e.who ? ` for ${e.who}` : ''}${t.group ? ` i ${t.group}` : ''}, ${day} klokken ${time}${t.location ? `, på ${t.location}` : ''}.`;
}

function joinNames(names) {
  if (names.length <= 1) return names[0] || '';
  return `${names.slice(0, -1).join(', ')} og ${names[names.length - 1]}`;
}

function isToday(d) {
  const fmt = (x) => x.toLocaleDateString('nb-NO', { timeZone: 'Europe/Oslo' });
  return fmt(d) === fmt(new Date());
}

module.exports = SpondApp;
