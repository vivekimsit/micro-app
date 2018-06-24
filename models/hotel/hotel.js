const joi = require('joi');
const uuidv4 = require('uuid/v4');

const Base = require('../base');

require('./address');
require('../merchant');

// TODO(vpoddar): Add schema
const schema = joi
  .object({
    uid: joi.string().required(),
  })
  .unknown()
  .required();

const Hotel = Base.Model.extend({
  tableName: 'hotels',

  defaults: function defaults() {
    return { uid: uuidv4() };
  },

  merchant: function() {
    return this.belongsTo('Merchant');
  },

  rooms: function() {
    return this.hasMany('Room');
  },

  address: function() {
    return this.hasMany('Address');
  }
});

module.exports = {
  Hotel: Base.model('Hotel', Hotel),
};
