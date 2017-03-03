var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");


app.get("/", function(req, res) {
  res.render("home");
});


app.get("/friends", function(req, res) {
  var friends = ["Petar", "John", "Eminem"];

  res.render("friends", {friends: friends});
});


app.post("/addfriend", function(req, res) {
  res.send("You have reached the post route.");
});



app.listen(3000, function() {
  console.log("Server is listening...");
});
