'use strict';

const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports = async (req, res, next) => {
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.replace('Bearer', '').trimLeft();
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return next(boom.unauthorized());
    }
    next();
  });
};
