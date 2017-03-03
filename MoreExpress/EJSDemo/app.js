var express = require("express");
var app = express();


// req -> request
// res -> response
// ejs -> embeded js

app.get("/", function(req, res) {
  // res.send("<h1>Hello</h1><h2> dude </h2>");
  res.render("home.ejs");
});

app.get("/love/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res) {
  var posts = [
    {title: "Post 1", author: "Susy"},
    {title: "Post 2", author: "BBB"}
  ]

  res.render("posts.ejs", {posts: posts});
});


app.listen(3000, function () {
  console.log("Server is listening...");
});
