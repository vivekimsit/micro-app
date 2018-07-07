const Base = require('../base');

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
  Address: Base.model('Address', Address)
};
