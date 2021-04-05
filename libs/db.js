const {Client} = require('pg')

const client = new Client({
	user: 'postgre',
	host: 'localhost',
	database: 'DNA',
	password: 'Password-123'
})

client.connect()