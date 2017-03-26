var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost/auth_demo");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});

app.listen(3000, function() {
  console.log("Server is listening...");
});
