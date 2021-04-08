const routes = require('express').Router();

routes.get('/', (req, res) => res.send('Cancelled'));

module.exports = routes;