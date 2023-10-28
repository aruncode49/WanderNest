const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listingModel");
const Review = require("../models/reviewModel.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview } = require("../middleware.js");

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

    req.flash("success", "New Review Created!");
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
    req.flash("success", "Review Deleted Successfully");
    res.status(200).redirect(`/listings/${id}`);
  })
);

module.exports = router;
