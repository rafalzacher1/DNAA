const routes = require('express').Router();
const db = require('../config/db');

routes.post('/', (request, result) => {
	let email = request.body.sub_email;
	db.query('DELETE FROM emails WHERE email = ($1)', [email], (error, results) => {
		if (error) {
			console.log(error.message);
		}
		
		result.redirect('back');
	})
});

module.exports = routes;
