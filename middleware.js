module.exports.isLogin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "Please login to proceed!");
    return res.redirect("/login");
  }
  next();
};
