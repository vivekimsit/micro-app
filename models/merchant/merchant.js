const joi = require('joi');
const uuidv4 = require('uuid/v4');

const Base = require('../base');

// TODO(vpoddar): Add schema
const schema = joi
  .object({
    uid: joi.string().required(),
    user_uid: joi.string().required(),
  })
  .unknown()
  .required();

const Merchant = Base.Model.extend({
  tableName: 'merchants',

  defaults: function defaults() {
    return {
      uid: uuidv4(),
    };
  },
});

module.exports = {
  Merchant: Base.model('Merchant', Merchant),
};
