['booking', 'hotel', 'merchant'].forEach(module => {
  Object.assign(exports, require(`./${module}`));
});

exports.db = require('./db');
module.exports = exports;
