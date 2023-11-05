const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// config cloud
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// create storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wandernest_listings",
    formats: ["png", "jpg", "jpeg"],
  },
});

// exports
module.exports = {
  cloudinary,
  storage,
};
