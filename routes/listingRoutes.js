const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLogin, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listingContollers");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// GET/POST -> "/"
router
  .route("/")
  .get(wrapAsync(listingController.getAllListings))
  .post(
    isLogin,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

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
