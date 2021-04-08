const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/team');
});

module.exports = routes;