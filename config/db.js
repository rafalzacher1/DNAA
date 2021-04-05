const {Client} = require('pg');

const client = new Client({
	user: 'postgres',
	host: 'localhost',
	database: 'DNA',
	password: 'Password-123',
});

module.exports = client;