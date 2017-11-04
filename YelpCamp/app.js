var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    Campground      = require("./models/campground"),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    seedDB          = require("./seeds");

// requiring routes
var commentRoutes     = require("./routes/comments");
    campgroundsRoutes = require("./routes/campgrounds");
    indexRoutes       = require("./routes/index");


// {useMongoClient: true} to fix warning
mongoose.connect("mongodb://mongo:27017", {useMongoClient: true});

// mongoose warning
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(flash());

// seedDB(); // seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "I am awesome!",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error       = req.flash("error");
  res.locals.success     = req.flash("success");
  next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundsRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


app.listen(3000, function() {
  console.log("Server is listening...");
});
