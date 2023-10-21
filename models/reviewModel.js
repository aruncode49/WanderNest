const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
