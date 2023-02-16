const { Pool} = require('pg');
 
const pool = new Pool({
  user: 'roomii',
  database: 'postgres',
  password: '',
 
})
 

module.exports = pool;