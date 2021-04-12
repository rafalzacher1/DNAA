const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Defines directory for static files (client side).
app.use('/', express.static('./public'));

app.use(bodyParser.json()); // To support JSON encoded bodies.
app.use(bodyParser.urlencoded({extended: false})); // To support URL encoded bodies.

// Routes.
const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');
const artRoute = require('./routes/art.js');
const blogsRoute = require('./routes/blogs.js');
const contactRoute = require('./routes/contact.js');
const knowYourStuffRoute = require('./routes/knowYourStuff.js');
const pastEventsRoute = require('./routes/pastEvents.js');
const purityKitsRoute = require('./routes/purityKits.js');
const speakersRoute = require('./routes/speakers.js');
const teamRoute = require('./routes/team.js');
const futureEventsRoute = require('./routes/futureEvents.js');
const subscribeRoute = require('./routes/subscribe.js');
const messageRoute = require('./routes/messageUs.js');
const conferenceRoute = require('./routes/conference.js');
const unsubscribeRoute = require('./routes/unsubscribe.js');

// Paypal routes.
const successRoute = require('./routes/success.js');
const cancelRoute = require('./routes/cancel.js');

// Use the created routes.
app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/art', artRoute);
app.use('/blog-posts', blogsRoute);
app.use('/contact', contactRoute);
app.use('/know-your-stuff', knowYourStuffRoute);
app.use('/past-events', pastEventsRoute);
app.use('/purity-kits', purityKitsRoute);
app.use('/speakers', speakersRoute);
app.use('/team', teamRoute);
app.use('/future-events', futureEventsRoute);
app.use('/subscribe', subscribeRoute);
app.use('/messageUs', messageRoute);
app.use('/conference', conferenceRoute);
app.use('/unsubscribe', unsubscribeRoute);

// Using paypal routes.
app.use('/success', successRoute);
app.use('/cancel', cancelRoute);

// Paypal client ID and secret.
const CLIENT =
  'AVK8hNy_UY9IrUqo_zu1T59AnU5ZiJJF__dBlQnuloA_G9RaOOQLxgx9hG3nuVk73YRRSxcxSHQxuLO0';
const SECRET =
  'EBBDIuZBkd34mY3z0RMRoQcXIdE0cJE-lXAtnbqomSVIVU7PagfCYTTAIlwKqXfW2D_HCyJ7BDjcP22N';
const PAYPAL_API = 'https://api-m.sandbox.paypal.com';

// Set up the payment:
// 1. Set up a URL to handle requests from the PayPal button
app.post('/my-api/create-payment/', function(req, res) {
	// 2. Call /v1/payments/payment to set up the payment
	request.post(PAYPAL_API + '/v1/payments/payment', {
		auth: {
			user: CLIENT,
			pass: SECRET
		},
		body: {
			intent: 'sale',
			payer: {
				payment_method: 'paypal'
			},
			transactions: [{
				amount: {
					total: '5.00',
					currency: 'GBP'
				}
			}],
			redirect_urls: {
				return_url: '/success',
				cancel_url: '/cancel'
			}
		},
		json: true
	}, function(err, response) {
		if (err) {
			console.error(err);
			return res.sendStatus(500);
		}
		// 3. Return the payment ID to the client
		res.json({
			id: response.body.id
		});
	});
})
// Execute the payment:
// 1. Set up a URL to handle requests from the PayPal button.
.post('/my-api/execute-payment/', function(req, res)
{
	// 2. Get the payment ID and the payer ID from the request body.
	var paymentID = req.body.paymentID;
	var payerID = req.body.payerID;
	// 3. Call /v1/payments/payment/PAY-XXX/execute to finalize the payment.
	request.post(PAYPAL_API + '/v1/payments/payment/' + paymentID + '/execute', {
		auth: {
			user: CLIENT,
			pass: SECRET
		},
		body: {
			payer_id: payerID,
			transactions: [{
				amount: {
					total: '5.00',
					currency: 'GBP'
				}
			}]
		},
		json: true
    }, function(err, response) {
    	if (err) {
    		console.error(err);
    		return res.sendStatus(500);
      	}
    	// 4. Return a success response to the client
    	res.json({
    		status: 'success'
    	});
    });
}).listen(5000, function() {
  console.log('Server listening at http://localhost:5000/');
});