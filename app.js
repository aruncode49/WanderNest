if (process.env.NODE_ENV != "Production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/userModel.js");

const listingRoutes = require("./routes/listingRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const userRoutes = require("./routes/userRoutes.js");

const app = express();
const dbURL = process.env.MONGO_ATLAS_DB_URL;

// set view engine
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));

// mongo store for connect mongo session
const store = MongoStore.create({
  mongoUrl: dbURL,
  crypto: {
    secret: "ADFI24JDAF@4#%KAD",
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("Error inside MONGO SESSION STORE: ", err);
});

// express-session
const sessionOption = {
  store,
  secret: "ADFI24JDAF@4#%KAD",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

// mongoose connection
mongoose
  .connect(dbURL)
  .then((value) => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Error in mongodb connection : ${err}`));

// express session
app.use(session(sessionOption));
app.use(flash());

// passport authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// setting up res.locals for flash messages
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// testing fake user
app.get("/demouser", async (req, res) => {
  let fakeUser = new User({
    email: "fakeemail2@gmail.com",
    username: "demo2 user",
  });

  let newUser = await User.register(fakeUser, "helloworld");
  res.send(newUser);
});

// express routes
app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);
app.use("/", userRoutes);

// for all routes excepted aboves
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

// handle error
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

app.listen(8080, () => console.log("Server is running on port 8080"));
