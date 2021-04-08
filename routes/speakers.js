const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/speakers');
});

module.exports = routes;