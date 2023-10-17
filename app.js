const express = require("express");
const mongoose = require("mongoose");

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderbuddy";

// mongoose connection
mongoose
  .connect(MONGO_URL)
  .then((value) => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Error in mongodb connection : ${err}`));

app.get("/", (req, res) => {
  res.send("Hii, I am root");
});

app.listen(8080, () => console.log("Server is running on port 8080"));
