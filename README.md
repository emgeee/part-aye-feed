part-aye-feed!
=============

This is a quick little app that allows people to send texts to a specific number and have them displayed on a web browser. In the spirit of making mistakes, the app does not save any of the texts so texts received by the server are promptly retrieved by the web client, then forgotten.

Remember, it's a party!


Configuration
---

Clone the directory then run "npm install"
Create a file in the root directory called "twilio_credentials.json" with the following JSON:

```json
{
	"twilio_sid": "<Twilio SID>",
	"twilio_auth": "<Twilio auth token>"
}
```

In order for the server to be able to receive text messages, you will need to expose it to the Internet by hosting it or using a took like [ngrok](https://ngrok.com/)

Then, you will need to configure the request URL for the Twilio number you are using to invoke the '/receive_message'. This can be done at [https://www.twilio.com/user/account/phone-numbers/incoming](https://www.twilio.com/user/account/phone-numbers/incoming).

That's all there is to it, fire it up at your next responsible gathering on a projector or TV and let people say dumb things!