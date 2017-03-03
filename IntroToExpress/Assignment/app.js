var express = require("express");
var app = express();



app.get("/", function(req, res) {
  res.send("Hi there!");
});

app.get("/speak/:animal", function(req, res) {
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!"
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];

  res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:msg/:times", function(req, res) {
  var message = req.params.msg;
  var times = req.params.times;

  res.send(message.repeat(times));
});

app.get("*", function (req, res) {
  res.send("Sorry, page not found!");
});



app.listen(3000, function () {
  console.log("Serving our app.");
});
