var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");


// req -> request
// res -> response
// ejs -> embeded js

app.get("/", function(req, res) {
  // res.send("<h1>Hello</h1><h2> dude </h2>");
  res.render("home");
});

app.get("/love/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
  var posts = [
    {title: "Post 1", author: "Susy"},
    {title: "Post 2", author: "BBB"}
  ]

  res.render("posts", {posts: posts});
});


app.listen(3000, function () {
  console.log("Server is listening...");
});
