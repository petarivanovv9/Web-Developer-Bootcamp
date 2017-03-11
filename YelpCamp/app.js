var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var campgrounds = [
  {name: "Salmon Creek", image: "http://www.istockphoto.com/resources/images/PhotoFTLP/img_82250973.jpg"},
  {name: "Sky", image: "https://www.aviary.com/img/photo-landscape.jpg"},
  {name: "Mountain", image: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-144748015-1-1500x814.jpg"}
];


app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);

  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});


app.listen(3000, function() {
  console.log("Server is listening...");
});
