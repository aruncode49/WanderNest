const Listing = require("../models/listingModel");

module.exports.getAllListings = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};
