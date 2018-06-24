const joi = require('joi');
const uuidv4 = require('uuid/v4');

const Base = require('../base');

const schema = joi
  .object({
    uid: joi.string().required(),
  })
  .unknown()
  .required();

const Room = Base.Model.extend({
  tableName: 'rooms',

  defaults: function defaults() {
    return { uid: uuidv4() };
  },

  onCreating: function onCreating(newObj, attr, options) {
    Base.Model.prototype.onCreating.apply(this, arguments);
    joi.attempt(this.changed, schema);
  },
});

module.exports = {
  Room: Base.model('Room', Room),
};
