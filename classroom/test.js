const express = require("express");
const expressSession = require("express-session");

const app = express();
const PORT = 3000;

// session options
const sessionOptions = {
  secret: "ADAgjadii343lalakd",
  resave: false,
  saveUninitialized: true,
};

// use express session
app.use(expressSession(sessionOptions));

app.get("/", (req, res) => {
  res.send(`Hello this is the test file. Welcome ${req.session.name}`);
});

//   storing info in session and use that info.
app.get("/register", (req, res) => {
  const { name = "anonymous" } = req.query;
  req.session.name = name;
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
