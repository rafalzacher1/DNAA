const nodemailer = require('nodemailer');
const db = require('../config/db');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

let readHTMLFile = (path, callback) => {
	fs.readFile(path, {encoding: 'utf-8'}, (error, html) => {
		if (error) {
			console.log(error.message);
			callback(error);
		} else {
			callback(null, html);
		}
	});
};

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'rafalzacher99@gmail.com', // Your email.
		pass: 'fru@iprAdruW4ej' // Your email password.
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
	
	const filePath = path.join(__dirname, '../public/newsletter/letter.html');	
	readHTMLFile(filePath, (error, html) => {
		let template = handlebars.compile(html);
		htmlToSend = template();
		console.log(htmlToSend);
		
		// Loop through all the emails and send a message to them all.
		for (let i = 0; i < 1; i++) {
			console.log(results.rows[i].email);
			
			let mailOptions = {
				from: 'rafalzacher99@gmail.com', // Your email.
				to: 'results.rows[i].email', // The recipients.
				subject: 'Website contact us page message.',
				html: htmlToSend
			};
			
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					console.log(error);
				}
			});
		}
		console.log("All emails have been sent.")
	})	
});