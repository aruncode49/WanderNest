const Listing = require("../models/listingModel");

module.exports.getAllListings = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

// render new form
module.exports.renderNewForm = (req, res) => {
  const category = [
    "trending",
    "rooms",
    "iconic-cities",
    "mountains",
    "castels",
    "amazing-pools",
    "farms",
    "camping",
    "arctic",
    "beach",
    "creative-spaces",
    "golfing",
  ];
  res.render("listings/new.ejs", { category });
};

// show listing
module.exports.showListings = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate("reviews")
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

// create new listing - POST
module.exports.createListing = async (req, res, next) => {
  const { path, filename } = req.file;
  const listing = req.body.listing;
  listing.owner = req.user._id;
  listing.image = { url: path, filename };
  await Listing.create(listing);
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

// render edit form
module.exports.renderEditForm = async (req, res) => {
  const category = [
    "trending",
    "rooms",
    "iconic-cities",
    "mountains",
    "castels",
    "amazing-pools",
    "farms",
    "camping",
    "arctic",
    "beach",
    "creative-spaces",
    "golfing",
  ];
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl, category });
};

// update listing
module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (req.file) {
    const { path, filename } = req.file;
    listing.image = { url: path, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated Successfully!");
  res.redirect(`/listings/${id}`);
};

// destroy listing
module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted Successfully!");
  res.redirect("/listings");
};

// find Listing From Category
module.exports.findListingFromCategory = async (req, res) => {
  const { category } = req.params;
  const allListings = await Listing.find({ category });
  if (allListings.length) {
    res.render("listings/index.ejs", { allListings });
  } else {
    req.flash("error", "No result found related to this category!");
    res.redirect("/listings");
  }
};
