require('dotenv').config();

const KnexMigrator = require('knex-migrator');
const knexMigrator = new KnexMigrator();

// check your database health
knexMigrator.isDatabaseOK()
  .then(function() {
    console.log('Database is OK');
  })
  .catch(async function(err) {
    if (err.code === 'DB_NOT_INITIALISED') {
      // database is not initialised?
      await knexMigrator.init();
      process.exit();
    } else {
      // database is not migrated?
      knexMigrator.migrate();
    }
  });
