const {Pool} = require('pg');

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'DNA',
	password: 'Password-123',
});

module.exports = pool;