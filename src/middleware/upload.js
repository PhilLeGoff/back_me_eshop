const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure that the 'uploads' folder exists in your project root
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // Create a unique filename using the current timestamp and original file extension.
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

// File filter to only accept images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// Initialize Multer middleware
const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
