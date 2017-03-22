var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");



// User.create({
//   email: "Asen@asenov.bg",
//   name: "Asen Asenov"
// });

Post.create({
  title: "Hoooo 4",
  content: "aaaaaaaaaaaaaaaaaaaaa"
}, function(err, post) {
  User.findOne({email: "Asen@asenov.bg"}, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      foundUser.posts.push(post);
      foundUser.save(function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
  });
});

// User.findOne({email: "Asen@asenov.bg"}).populate("posts").exec(function(err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });
