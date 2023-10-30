const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/userModel");
const router = express.Router();
const passport = require("passport");

const userController = require("../controllers/userControllers");

// signup
router.get("/signup", userController.renderSignupForm);

// signup
router.post("/signup", wrapAsync(userController.signup));

// login
router.get("/login", userController.renderLoginForm);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync(userController.login)
);

// logout route
router.get("/logout", userController.logout);

module.exports = router;
