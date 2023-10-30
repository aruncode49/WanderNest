const express = require("express");
const router = express.Router();
const Listing = require("../models/listingModel");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLogin, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listingContollers");

// Index route : Get all listings
router.get("/", wrapAsync(listingController.getAllListings));

// new listing
router.get("/new", isLogin, listingController.renderNewForm);

// Show Route
router.get("/:id", wrapAsync(listingController.showListings));

// Create new listing
router.post(
  "/",
  isLogin,
  validateListing,
  wrapAsync(listingController.createListing)
);

// edit
router.get(
  "/:id/edit",
  isLogin,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

// update
router.put(
  "/:id",
  isLogin,
  isOwner,
  validateListing,
  wrapAsync(listingController.updateListing)
);

// delete
router.delete(
  "/:id",
  isLogin,
  isOwner,
  wrapAsync(listingController.destroyListing)
);

module.exports = router;
