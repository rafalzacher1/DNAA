const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/upcoming-events', {title: "Future Events"});
});

module.exports = routes;