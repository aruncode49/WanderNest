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

app.get("/", (req, res) => {
  res.end("Hello this is the test file.");
});

app.listen(PORT, () => console.log("Server running on port 3000"));
