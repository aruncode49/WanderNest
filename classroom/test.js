const express = require("express");
const expressSession = require("express-session");
const flash = require("connect-flash");
const path = require("path");

const app = express();
const PORT = 3000;

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// session options
const sessionOptions = {
  secret: "ADAgjadii343lalakd",
  resave: false,
  saveUninitialized: true,
};

// use express session
app.use(expressSession(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("/", (req, res) => {
  res.render("page.ejs", {
    name: req.session.name,
  });
});

//   storing info in session and use that info.
app.get("/register", (req, res) => {
  const { name = "anonymous" } = req.query;
  req.session.name = name;
  if (name === "anonymous") {
    req.flash("error", "User not registered");
  } else {
    req.flash("success", "User registered successfully!");
  }

  res.redirect("/");
});

// app.get("/test-session", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }

//   res.send(`You visit this website ${req.session.count} time`);
// });

app.listen(PORT, () => console.log("Server running on port 3000"));
