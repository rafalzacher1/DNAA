const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/upcoming-events');
});

module.exports = routes;