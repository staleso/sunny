'use strict';

module.exports = {
  async getEvents({ homey, query }) {
    return homey.app.getUpcoming(Number(query.days) || 7);
  },
};
