const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listingModel");

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderbuddy";

// mongoose connection
mongoose
  .connect(MONGO_URL)
  .then((value) => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Error in mongodb connection : ${err}`));

// routes
app.get("/", (req, res) => {
  res.send("Hii, I am root");
});

app.get("/testListing", async (req, res) => {
  await Listing.create({
    title: "My new hotel",
    description: "The new hotel with swimming pool",
    price: 1200,
    location: "the new street in los angles",
    country: "America",
  }).then(() => console.log("Listing created successfully"));
  res.send("Listing tested successfully");
});

app.listen(8080, () => console.log("Server is running on port 8080"));
