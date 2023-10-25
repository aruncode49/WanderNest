const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listingModel");
const Review = require("../models/reviewModel.js");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require("../schema.js");

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Review
// POST Review Route
router.post(
  "/",
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
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;

    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    res.status(200).redirect(`/listings/${id}`);
  })
);

module.exports = router;
