'use strict';

const bodyParser = require('body-parser');
const boom = require('Boom');
const cors = require('cors');
const express = require('express');
const http = require('http');

const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/', routes);

// error handling
app.use((req, res, next) => {
  next(boom.notFound());
});
app.use(errorHandler);

module.exports = http.createServer(app);
