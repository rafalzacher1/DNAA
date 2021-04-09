const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/unsubscribe', {title: "Unsubscribe"});
});

module.exports = routes;