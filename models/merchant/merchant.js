const joi = require('joi');

require('../address');
require('../hotel');

const Base = require('../base');

const schema = joi
  .object({
    uid: joi.string().required(),
    name: joi.string().required(),
    description: joi.string(),
    logo: joi.string(),
    cover: joi.string(),
    facebook_url: joi.string(),
    twitter_url: joi.string(),
  })
  .unknown()
  .required();

const Merchant = Base.Model.extend({
  tableName: 'merchant',

  onCreating: function onCreating(newObj, attr, options) {
    Base.Model.prototype.onCreating.apply(this, arguments);
    this.set(joi.attempt(this.changed, schema));
  },

  hotels: function () {
    return this.hasMany('Hotel');
  },

  addresses: function() {
    return this.hasMany('Address');
  }
});

module.exports = {
  Merchant: Base.model('Merchant', Merchant),
};
