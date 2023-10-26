const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");

const listingRoutes = require("./routes/listingRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderbuddy";

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// express-session
const sessionOption = {
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
app.use(session(sessionOption));
app.use(flash());
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// mongoose connection
mongoose
  .connect(MONGO_URL)
  .then((value) => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Error in mongodb connection : ${err}`));

// routes
app.get("/", (req, res) => {
  res.send("Hii, I am root");
});

// setting up res.locals for flash messages
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// express routes
app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);

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
