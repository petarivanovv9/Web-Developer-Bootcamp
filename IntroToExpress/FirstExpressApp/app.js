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



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
