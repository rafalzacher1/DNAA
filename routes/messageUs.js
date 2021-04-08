const routes = require('express').Router();
const nodemailer = require('nodemailer');

routes.post('/', (request, result) => {
	let {name, email, message} = request.body;
	
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'rafalzacher99@gmail.com', // Your email.
			pass: '$rLspefo7&8R8n' // Your email password.
		}
	});
	
	let mailOptions = {
		from: email,
		to: 'rafalzacher99@gmail.com', // Your email.
		subject: 'Website contact us page message.',
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