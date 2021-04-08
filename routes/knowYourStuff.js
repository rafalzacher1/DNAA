const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/know-your-stuff');
});

module.exports = routes;