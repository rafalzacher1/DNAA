const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/contact', {title: "Contact us"});
});

module.exports = routes;