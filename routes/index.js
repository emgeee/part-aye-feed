

var twilio_sid = 'AC25647fb4a28c21289868fe76c460e31b';
var twilio_auth = 'bdffa28a393c098b10a887e05b22e89b';

var twilio = require('twilio');
var client = new twilio.RestClient(twilio_sid, twilio_auth);


var messages = [];

exports.receive_message = function(req, res){
	console.log(req.query);

	messages.push(req.query);

	res.send();
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

	client.messages.list(function(error, data){

		data.messages.forEach(function(message) {
			console.log(message.Body);
		});

		res.render('index', {});
	});


};