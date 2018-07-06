const joi = require('joi');

const Base = require('../base');

const Booking = Base.Model.extend({
  tableName: 'booking',
});

module.exports = {
  Booking: Base.model('Booking', Booking),
};
