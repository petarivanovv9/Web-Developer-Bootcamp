var bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    express    = require("express"),
    app        = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title: "Test Blog",
//   image: "https://i.ytimg.com/vi/a6KGPBflhiM/hqdefault.jpg",
//   body: "Golden Retriever"
// });


// RESTFUL ROUTES

app.get("/", function(req, res) {
  res.redirect("/blogs");
});

// INDEX ROUTE
app.get("/blogs", function(req, res) {
  Blog.find({}, function(err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", {blogs: blogs});
    }
  });
});

// NEW ROUTE
app.get("/blogs/new", function(req, res) {
  res.render("new.ejs");
});

// CREATE ROUTE
app.post("/blogs", function(req, res) {
  Blog.create(req.body.blog, function(err, newBlog) {
    if (err) {
      console.log(err);
      res.render("new");
    } else {
      res.redirect("/blogs");
    }
  });
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
  Blog.findById(req.params.id, function(err, foundBlog) {
    if (err) {
      res.redirect("/blogs");
    } else {
      res.render("show", {blog: foundBlog});
    }
  });
});


app.listen(3000, function() {
  console.log("Server is listening...");
});
