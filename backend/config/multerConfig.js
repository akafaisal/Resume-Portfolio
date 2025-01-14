const multer = require("multer");
const path = require("path");

//Set up storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // The folder where the images will be stored
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});


//Inititalizr Multer with storage configuration.
const upload = multer({ storage: storage });

module.exports = upload;
