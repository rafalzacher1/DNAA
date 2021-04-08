const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/conference', {title: "Conference 2021"});
});

module.exports = routes;