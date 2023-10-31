const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/userModel");
const router = express.Router();
const passport = require("passport");

const userController = require("../controllers/userControllers");

router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userController.login)
  );

// logout route
router.get("/logout", userController.logout);

module.exports = router;
