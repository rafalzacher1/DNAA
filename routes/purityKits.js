const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/drug-purity-kits');
});

module.exports = routes;