const joi = require('joi');
const uuidv4 = require('uuid/v4');

const Base = require('../base');

// TODO(vpoddar): Add schema
const schema = joi
  .object({
    uid: joi.string().required(),
  })
  .unknown()
  .required();

const Address = Base.Model.extend({
  tableName: 'address',

  defaults: function defaults() {
    return { uid: uuidv4() };
  },

  hotel: function() {
    return this.belongsTo('Hotel');
  },
});

module.exports = {
  Address: Base.model('Address', Address);
};
