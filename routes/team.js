const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/team', {title: "Team"});
});

module.exports = routes;