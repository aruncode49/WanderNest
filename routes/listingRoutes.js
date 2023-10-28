const express = require("express");
const router = express.Router();
const Listing = require("../models/listingModel");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLogin, isOwner, validateListing } = require("../middleware.js");

// Index route : Display all listings
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

// new listing
router.get("/new", isLogin, (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
      .populate("reviews")
      .populate("owner");
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  })
);

// Create new listing
router.post(
  "/",
  isLogin,
  validateListing,
  wrapAsync(async (req, res, next) => {
    const listing = req.body.listing;
    listing.owner = req.user._id;
    await Listing.create(listing);
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  })
);

// edit
router.get(
  "/:id/edit",
  isLogin,
  isOwner,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  })
);

// update
router.put(
  "/:id",
  isLogin,
  isOwner,
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listings/${id}`);
  })
);

// delete
router.delete(
  "/:id",
  isLogin,
  isOwner,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Successfully!");
    res.redirect("/listings");
  })
);

module.exports = router;
