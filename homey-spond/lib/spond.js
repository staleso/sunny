'use strict';

// Minimal client for Spond's (unofficial) API.
const API = 'https://api.spond.com/core/v1/';

class Spond {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.token = null;
  }

  async login() {
    const body = JSON.stringify({ email: this.email, password: this.password });
    const headers = { 'Content-Type': 'application/json' };

    let res = await fetch(API + 'auth2/login', { method: 'POST', headers, body });
    if (res.ok) {
      const data = await res.json();
      this.token = data.accessToken?.token || data.loginToken;
    } else {
      res = await fetch(API + 'login', { method: 'POST', headers, body });
      if (!res.ok) throw new Error(`Spond-innlogging feilet (${res.status})`);
      const data = await res.json();
      this.token = data.loginToken;
    }
    if (!this.token) throw new Error('Spond-innlogging ga ingen token');
  }

  async request(path) {
    if (!this.token) await this.login();
    let res = await fetch(API + path, { headers: { Authorization: `Bearer ${this.token}` } });
    if (res.status === 401) {
      await this.login();
      res = await fetch(API + path, { headers: { Authorization: `Bearer ${this.token}` } });
    }
    if (!res.ok) throw new Error(`Spond API-feil ${res.status} på ${path}`);
    return res.json();
  }

  getProfile() {
    return this.request('profile');
  }

  getGroups() {
    return this.request('groups/');
  }

  getEvents({ max = 50, days = 14 } = {}) {
    const now = new Date();
    const until = new Date(now.getTime() + days * 86400000);
    const q = new URLSearchParams({
      includeHidden: 'false',
      addProfileInfo: 'true',
      scheduled: 'true',
      order: 'asc',
      max: String(max),
      minEndTimestamp: now.toISOString(),
      maxStartTimestamp: until.toISOString(),
    });
    return this.request('sponds/?' + q);
  }
}

module.exports = Spond;
