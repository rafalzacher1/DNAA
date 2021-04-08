const nodemailer = require('nodemailer');
const db = require('../config/db');

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'rafalzacher99@gmail.com', // Your email.
		pass: '$rLspefo7&8R8n' // Your email password.
	}
});

transporter.verify(function(error, success) {
	if (error) {
	   console.log(error);
	} else {
	   console.log('Server is ready to take our messages');
	}
});

db.query('SELECT * FROM emails;', (error, results) => {
	if (error) {
		console.log(error.message);
	}
	
	// Loop through all the emails and send a message to them all.
	for (let i = 0; i < results.rows.length; i++) {
		console.log(results.rows[i].email);
		
		let mailOptions = {
			from: 'rafalzacher99@gmail.com', // Your email.
			to: results.rows[i].email, // The recipients.
			subject: 'Website contact us page message.',
			text: 'Test',
			html: ''
		};
		
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.reponse);
			}
		});
	}
	
});