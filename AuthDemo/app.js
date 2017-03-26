var express               = require("express"),
    bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User                  = require("./models/user");

var app = express();

mongoose.connect("mongodb://localhost/auth_demo");

app.use(require("express-session")({
  secret: "Petar is an awesome person",
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
// app.use(express.static(__dirname + "/public"));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ===============
// ROUTES
// ===============


app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});

app.get("/register", function(req, res) {
  res.render("register");
});

app.post("/register", function(req, res) {
  User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function() {
      res.redirect("/secret");
    });
  });
});

app.listen(3000, function() {
  console.log("Server is listening...");
});
