const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/past-events', {title: "Past Events"});
});

module.exports = routes;