const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/about');
});

module.exports = routes;