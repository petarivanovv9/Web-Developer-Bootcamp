var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");


var postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


// var newUser = new User({
//   email: "asan@abv.bg",
//   name: "Asan Peshkov"
// });
// newUser.posts.push({
//   title: "Hello dude",
//   content: "just kidding"
// });
// newUser.save(function(err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// var newPost = new Post({
//   title: "Apples",
//   content: "awesome apples"
// });
// newPost.save(function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


User.findOne({name: "Asan Peshkov"}, function(err, user) {
  if (err) {
    console.log(err);
  } else {
    user.posts.push({
      title: "3 things I really hate",
      content: "lying .... .... "
    });
    user.save(function(err, user) {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
