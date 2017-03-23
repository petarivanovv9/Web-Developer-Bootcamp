var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
  {
    name: "Booo",
    image: "http://haulihuvila.com/wp-content/uploads/2012/09/hauli-huvila-campgrounds-lg.jpg",
    description: "hohohohooh"
  },
  {
    name: "BOOOOM",
    image: "http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx",
    description: "llllllllll"
  },
  {
    name: "FUUUCK",
    image: "http://www.cityofwashburn.org/uploads/7/0/4/7/70473445/8666847.jpg?464",
    description: "gggggggg"
  }
];

function seedDB() {
  // Remove all campgrounds
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("removed campgrounds!");

    // add a few campgrounds
    data.forEach(function(seed) {
      Campground.create(seed, function(err, campground) {
        if (err) {
          console.log((err));
        } else {
          console.log("added a campground");
          // create a comment
          Comment.create(
            {
              text: "This place is great!",
              author: "Homer"
            }, function(err, comment) {
              if (err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment");
              }
            }
          );
        }
      });

    });
  });

}

module.exports = seedDB;
