// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

// Setup Express App
var app = express();
var PORT = process.env.PORT || 3306;

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/app/public'));

// Import routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Start listening.
app.listen(PORT, '0.0.0.0');