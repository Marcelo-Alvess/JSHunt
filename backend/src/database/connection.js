const { Pool } = require('pg');

const config = {
  user: 'postgres',
  host: 'localhost',
  password: '7894',
  database: 'nodeapi'
};

const pool = new Pool(config);

module.exports = pool;