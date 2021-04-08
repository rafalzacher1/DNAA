const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/know-your-stuff', {title: "Know Your Stuff"});
});

module.exports = routes;