'use strict';

module.exports = (err, req, res, next) => {
  // never cache errors
  res.set({
    'Cache-Control':
      'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0'
  });

  if (err.isBoom) {
    res.json({ error: err.output.payload });
  } else {
    res.json({ error: err });
  }
};
