'use strict';

const bodyParser = require('body-parser');
const boom = require('Boom');
const cors = require('cors');
const express = require('express');
const http = require('http');
const jwt = require('jsonwebtoken');

const routes = require('./routes');
const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(async (req, res, next) => {
  const token = req.headers['authorization'].replace('Bearer', '').trimLeft();
  // console.log(token);
  // console.log(config);
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      // console.log(err);
      return next(boom.unauthorized());
    }
    // console.log('Decoded', decoded);
    next();
  });
});
app.use(routes);

module.exports = http.createServer(app)
