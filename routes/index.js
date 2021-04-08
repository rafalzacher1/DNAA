const routes = require('express').Router();

routes.get('/', (request, response) => {
	response.render('pages/index', {title: "Home"});
});

module.exports = routes;