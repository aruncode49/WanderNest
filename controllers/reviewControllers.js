const Listing = require("../models/listingModel");
const Review = require("../models/reviewModel");

// create new review
module.exports.createReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  listing.reviews.push(newReview);

  await listing.save();
  await newReview.save();

  req.flash("success", "New Review Created!");
  res.status(401).redirect(`/listings/${listing._id}`);
};

// destroy review
module.exports.destroyReview = async (req, res) => {
  const { id, reviewId } = req.params;

  await Review.findByIdAndDelete(reviewId);
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  req.flash("success", "Review Deleted Successfully");
  res.status(200).redirect(`/listings/${id}`);
};
