['booking'].forEach(module => {
  Object.assign(exports, require(`./${module}`));
});

module.exports = exports;
