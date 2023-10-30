const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLogin, isOwner } = require("../middleware.js");

const reviewController = require("../controllers/reviewControllers");

// Review
// POST Review Route
router.post(
  "/",
  isLogin,
  validateReview,
  wrapAsync(reviewController.createReview)
);

// Delete Reivew Route
router.delete(
  "/:reviewId",
  isLogin,
  isOwner,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
