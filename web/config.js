'use strict';

const joi = require('joi');

const schema = joi.object({
  PORT: joi.number().integer().min(0).max(65535),
  SECRET: joi.string().required(),
}).unknown().required();

const envVars = joi.attempt(process.env, schema);

module.exports = {
  port: envVars.PORT,
  secret: envVars.SECRET,
};
