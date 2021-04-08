const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/speakers', {title: "Speakers"});
});

module.exports = routes;