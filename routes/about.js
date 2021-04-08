const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/about', {title: "About us"});
});

module.exports = routes;