[
  'booking',
  'hotel',
  'merchant',
  'room',
].forEach(module => {
  Object.assign(exports, require(`./${module}`));
});

exports.db = require('./db');

module.exports = exports;
