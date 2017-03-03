var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extented: true}));

app.set("view engine", "ejs");


var friends = ["Petar", "John", "Eminem"];


app.get("/", function(req, res) {
  res.render("home");
});


app.get("/friends", function(req, res) {
  res.render("friends", {friends: friends});
});


app.post("/addfriend", function(req, res) {
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});



app.listen(3000, function() {
  console.log("Server is listening...");
});
