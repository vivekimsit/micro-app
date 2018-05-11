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
  if (!req.headers['authorization']) {
    console.log('Authorization header is missing');
    return next(boom.unauthorized());
  }
  const token = req.headers['authorization'].replace('Bearer', '').trimLeft();
  // console.log(token);
  // console.log(config);
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return next(boom.unauthorized());
    }
    // console.log('Decoded', decoded);
    next();
  });
});
app.use('/api/v1/', routes);

module.exports = http.createServer(app);
