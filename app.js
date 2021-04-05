const express = require('express');
const path = require('path');
const app = express();
let host = 'localhost';
let port = 3088;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', (request, result) => {
	result.render('pages/index');
});

app.get('/about', (request, result) => {
	result.render('pages/about');
});

let server = app.listen(port, () => {	
	console.log(`Ready at ${host}:${port}`);
});