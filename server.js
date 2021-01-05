var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// bodyparser for url encoded requests and json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
