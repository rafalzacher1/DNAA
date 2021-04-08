const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/contact');
});

module.exports = routes;