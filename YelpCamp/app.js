var express = require("express");
var app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  var campgrounds = [
    {name: "Salmon Creek", image: "http://www.istockphoto.com/resources/images/PhotoFTLP/img_82250973.jpg"},
    {name: "Sky", image: "https://www.aviary.com/img/photo-landscape.jpg"},
    {name: "Mountain", image: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-144748015-1-1500x814.jpg"}
  ];

  res.render("campgrounds", {campgrounds: campgrounds});
});


app.listen(3000, function() {
  console.log("Server is listening...");
});
