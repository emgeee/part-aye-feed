
/**
 * Module dependencies.
 */

var express = require('express')
var routes = require('./routes/index.js')
var http = require('http')
var path = require('path')
var sass = require('node-sass')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var errorHandler = require('errorhandler')

var app = express()

// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride())
app.use(express.static(path.join(__dirname, 'public')))

// development only
if ('development' === app.get('env')) {
  app.use(errorHandler())
}

app.get('/', routes.index)
app.get('/receive_message', routes.receive_message)
app.get('/retrieve_messages', routes.retrieve_messages)

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})
