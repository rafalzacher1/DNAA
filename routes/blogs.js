const routes = require('express').Router();

routes.get('/', (request, response) => {	
	response.render('pages/blogs', {title: "Blogs"});
});

module.exports = routes;