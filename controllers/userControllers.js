const User = require("../models/userModel");

// render signup form
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

// signup
module.exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    // login just after registered new user
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "User created successfully");
      res.redirect("/listings");
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
};

// render login form
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

// login
module.exports.login = async (req, res) => {
  req.flash("success", "Welcome back to wandernest!");
  res.redirect("/listings");
};

// logout
module.exports.logout = (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out successfully!");
    res.redirect("/listings");
  });
};
