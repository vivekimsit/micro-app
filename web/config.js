'use strict';

const joi = require('joi');

const schema = joi
  .object({
    PORT: joi
      .number()
      .integer()
      .min(0)
      .max(65535),
   NODE_ENV: joi
    .string()
    .allow(['development', 'production', 'test'])
    .default('development'),
    SECRET: joi.string().required(),
  })
  .unknown()
  .required();

const envVars = joi.attempt(process.env, schema);

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  secret: envVars.SECRET,
};
