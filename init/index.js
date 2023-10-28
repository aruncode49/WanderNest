const mongoose = require("mongoose");
const initialData = require("./data.js");
const Listing = require("../models/listingModel.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderbuddy";

// mongoose connection
mongoose
  .connect(MONGO_URL)
  .then((value) => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Error in mongodb connection : ${err}`));

// initialize database
async function initDatabase() {
  await Listing.deleteMany({});
  initialData.data = initialData.data.map((listing) => ({
    ...listing,
    owner: "653cedcec509811ac344d394",
  }));
  await Listing.insertMany(initialData.data).then((val) =>
    console.log("Data Initialized")
  );
}

initDatabase();
