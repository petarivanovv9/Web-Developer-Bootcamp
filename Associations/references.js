var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");


var postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});
var User = mongoose.model("User", userSchema);

// User.create({
//   email: "Asen@asenov.bg",
//   name: "Asen Asenov"
// });

// Post.create({
//   title: "Hoooo 3",
//   content: "hohoohoohoho"
// }, function(err, post) {
//   User.findOne({email: "Asen@asenov.bg"}, function(err, foundUser) {
//     if (err) {
//       console.log(err);
//     } else {
//       foundUser.posts.push(post);
//       foundUser.save(function(err, data) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       });
//     }
//   });
// });

User.findOne({email: "Asen@asenov.bg"}).populate("posts").exec(function(err, user) {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});
