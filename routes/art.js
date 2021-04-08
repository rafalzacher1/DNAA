const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/art', {title: "Art"});
});

module.exports = routes;