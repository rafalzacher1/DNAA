const routes = require('express').Router();
const nodemailer = require('nodemailer');

routes.post('/', (request, result) => {
	let {name, email, message} = request.body;
	
	let transporter = nodemailer.createTransport({
		service: 'outlook',
		auth: {
			user: 'dnacampaign@outlook.com', // Your email.
			pass: '' // Your email password.
		}
	});
	
	let mailOptions = {
		from: email,
		to: 'dnacampaign@outlook.com', // Your email.
		subject: 'Message from website.',
		text: message + '. From ' + name
	};
	
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent');
		}
	});
	
	result.redirect('back');
});

module.exports = routes;