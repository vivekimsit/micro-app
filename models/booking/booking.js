const joi = require('joi');
const uuidv4 = require('uuid/v4');

const Base = require('../base');

const schema = joi
  .object({
    uid: joi.string().required(),
    type: joi.string().required(),
  })
  .unknown()
  .required();

const Booking = Base.Model.extend({
  tableName: 'bookings',

  defaults: function defaults() {
    return {
      uid: uuidv4(),
    };
  },

  onCreating: function onCreating(newObj, attr, options) {
    Base.Model.prototype.onCreating.apply(this, arguments);
    joi.attempt(this.changed, schema);
  },
});

module.exports = {
  Booking: Base.model('Booking', Booking),
};
