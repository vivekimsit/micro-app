const knex = require('knex');
const config = require('./config');
const connection = knex(config);

async function init() {
  return Promise.resolve(connection);
}

async function close() {
  return connection.destroy();
}

module.exports = {
  connection,
  init,
  close,
};
