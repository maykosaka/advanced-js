// BASE SETUP
// ======================================================

// Dependencies
var express	= require('express');		// express: the Node framework
var app	= express();	// define our app using express, meaning express creates the server
var bodyParser = require('body-parser'); // will let us pull POST content from our HTTP reqest so that we can do things like create a bear
	// bodyParser is middleware?

// configure app to user bodyParser().  this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;	// set our port

var mongoose = require('mongoose'); // call the mongoose package
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq80'); // connect to our remote database hosted by Modulus

var Bear     = require('/Users/mayk/Documents/app/models/bear');


// ROUTES FOR OUR API
// ======================================================
var router = express.Router();	// get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.'); // code is being run
	next(); // make sure we go to the next routes & don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!!' });
});

// more routes for our API will happen here

// on routes that end in /bears
// --------------------------------------
router.route('/bears')

	// create a bear (accessed at POST http://localhost:8080/api/bears)
	.post(function(req, res) {

		var bear = new Bear();		// create a new instance of the Bear model
		bear.name = req.body.name;	// set the bears name (comes from the request)

		// save the bear and check for errors
		bear.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Bear created!' });
		});
	});


// REGISTER OUR ROUTES -------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

      

// START THE SERVER
// =====================================================
app.listen(port);
console.log('Magic happens on port ' + port);
