const express = require("express");
const expressSession = require("express-session");

const app = express();
const PORT = 3000;

// use express session
app.use(
  expressSession({
    secret: "ADAgjadii343lalakd",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/test-session", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }

  res.send(`You visit this website ${req.session.count} time`);
});

app.get("/", (req, res) => {
  res.end("Hello this is the test file.");
});

app.listen(PORT, () => console.log("Server running on port 3000"));
