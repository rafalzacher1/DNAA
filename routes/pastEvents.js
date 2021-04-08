const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/past-events');
});

module.exports = routes;