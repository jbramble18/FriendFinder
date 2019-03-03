//Declares the express dependancy
var express = require("express");

//Tells node that we have an express server
var app = express();

//Sets inital port to 8080, allows a variation if Heroku changes it

var PORT = process.env.PORT || 8080;

//Allows express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


//Route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});