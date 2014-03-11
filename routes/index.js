

var twilio_sid = 'AC25647fb4a28c21289868fe76c460e31b';
var twilio_auth = 'bdffa28a393c098b10a887e05b22e89b';

var twilio = require('twilio');
var client = new twilio.RestClient(twilio_sid, twilio_auth);

var messages = [];

exports.receive_message = function(req, res){

	messages.push(req.query);
	console.log(messages);

	res.send('');
};

exports.retrieve_messages = function(req, res){
	var m = messages;
	messages = [];

	return res.json(m);
};



/*
 * GET home page.
 */

exports.index = function(req, res){

	client.sms.messages.list(function(error, data){

		if(!error){
			data.messages.forEach(function(message) {
				console.log(message.Body);
			});
		}

		res.render('index', {});

	});

};






