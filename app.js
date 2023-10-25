const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listingModel");
const Review = require("./models/reviewModel.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { reviewSchema } = require("./schema.js");
const listingRoutes = require("./routes/listingRoutes");

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderbuddy";

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// mongoose connection
mongoose
  .connect(MONGO_URL)
  .then((value) => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Error in mongodb connection : ${err}`));

// routes
app.get("/", (req, res) => {
  res.send("Hii, I am root");
});

app.use("/listings", listingRoutes);

// Review
// POST Review Route
app.post(
  "/listing/:id/reviews",
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);

    await listing.save();
    await newReview.save();

    console.log("New Review Added");
    res.status(401).redirect(`/listings/${listing._id}`);
  })
);

// Delete Reivew Route
app.delete(
  "/listings/:id/reviews/:reviewId",
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;

    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    res.status(200).redirect(`/listings/${id}`);
  })
);

// app.get("/testListing", async (req, res) => {
//   await Listing.create({
//     title: "My new hotel",
//     description: "The new hotel with swimming pool",
//     price: 1200,
//     location: "the new street in los angles",
//     country: "America",
//   }).then(() => console.log("Listing created successfully"));
//   res.send("Listing tested successfully");
// });

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
