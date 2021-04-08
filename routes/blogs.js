const routes = require('express').Router();

routes.get('/', (request, response) => {	
	response.render('pages/blogs');
});

module.exports = routes;