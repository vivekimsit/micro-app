const knex = require('knex');
const config = require('./config');

let connection = knex(config);

async function init() {
  return Promise.resolve(connection);
}

async function close() {
  if (connection) {
    await connection.destroy();
    connection = undefined;
  }
}

module.exports = {
  close,
  connection,
  init,
};
