var express = require("express");
var app = express();


app.get("/", function (req, res) {
  console.log("Someone made a request to /!");
  res.send("Hi there!");
});

app.get("/bye", function (req, res) {
  console.log("Someone made a request to /bye!");
  res.send("Goodbye!");
});

app.get("/dog", function (req, res) {
  console.log("Someone made a request to /dog!");
  res.send("MEOW!");
});

// Route params example 1
app.get("/r/:subredditName", function(req, res) {
  var subreddit = req.params.subredditName;
  // console.log(req.params["subredditName"]);
  res.send("Welcome to the " + subreddit + " subreddit!");
});

// Route params example 2
app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
  res.send("Welcome to the comments page!");
});

// `*` route mather - "catch all"
app.get("*", function (req, res) {
  res.send("You are a star!");
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
