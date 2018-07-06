const joi = require('joi');
const uuidv4 = require('uuid/v4');

const Base = require('../base');

require('../booking');
require('../merchant');

const schema = {
  create = joi
    .object({
      uid: joi.string().required(),
      name: joi.string().required(),
      logo: joi.string().required(),
      description: joi.string(),
      status: joi.string().required().default('active'),
      merchant_uid: joi.string().required(),
    })
    .unknown()
};
const schema = joi
  .object({
    uid: joi.string().required(),
    name: joi.string().required(),
    logo: joi.string().required(),
    description: joi.string(),
    status: joi.string().required().default('active'),
    merchant_uid: joi.string().required(),
  })
  .unknown();

const Hotel = Base.Model.extend({
  tableName: 'hotel',

  defaults: function defaults() {
    return { uid: uuidv4() };
  },

  onCreating: function onCreating(newObj, attr, options) {
    Base.Model.prototype.onCreating.apply(this, arguments);
    this.set(joi.attempt(this.changed, schema.create));
  },

  merchant: function() {
    return this.belongsTo('Merchant');
  },

  rooms: function() {
    return this.hasMany('Room');
  },

  bookings: function() {
    return this.hasMany('Booking');
  },
});

module.exports = {
  Hotel: Base.model('Hotel', Hotel),
};
