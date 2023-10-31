const express = require("express");
const router = express.Router();
const Listing = require("../models/listingModel");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLogin, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listingContollers");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// GET/POST -> "/"
router
  .route("/")
  .get(wrapAsync(listingController.getAllListings))
  // .post(isLogin, validateListing, wrapAsync(listingController.createListing));
  .post(upload.single("listing[image]"), (req, res) => {
    res.send(req.file);
  });

// new listing
router.get("/new", isLogin, listingController.renderNewForm);

// GET/PUT/DELETE -> "/:id"
router
  .route("/:id")
  .get(wrapAsync(listingController.showListings))
  .put(
    isLogin,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLogin, isOwner, wrapAsync(listingController.destroyListing));

// edit
router.get(
  "/:id/edit",
  isLogin,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
