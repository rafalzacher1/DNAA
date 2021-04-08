const routes = require('express').Router();

routes.get('/', (request, result) => {
	result.render('pages/drug-purity-kits', {title: "Purity Kits"});
});

module.exports = routes;