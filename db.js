const { Pool} = require('pg');
 
const pool = new Pool({
  database: 'roomii',
  user: 'postgres',
  password: '',
 
})
 

module.exports = pool;