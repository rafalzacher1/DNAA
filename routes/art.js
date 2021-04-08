const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/art');
});

module.exports = routes;