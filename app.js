const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listingModel");
const path = require("path");

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderbuddy";

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// mongoose connection
mongoose
  .connect(MONGO_URL)
  .then((value) => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Error in mongodb connection : ${err}`));

// routes
app.get("/", (req, res) => {
  res.send("Hii, I am root");
});

// Index route : Display all listings
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// app.get("/testListing", async (req, res) => {
//   await Listing.create({
//     title: "My new hotel",
//     description: "The new hotel with swimming pool",
//     price: 1200,
//     location: "the new street in los angles",
//     country: "America",
//   }).then(() => console.log("Listing created successfully"));
//   res.send("Listing tested successfully");
// });

app.listen(8080, () => console.log("Server is running on port 8080"));
