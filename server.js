// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================

var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Static directory to be served
app.use(express.static("public"));

// Sets up the bodyParser app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sets up handlebars
app.engine("handlebars", exphbs({ defaultlayout: "main"}));
app,set("view engine","handlebars");

// setup the routes
var routes = require("./controllers/burger_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
