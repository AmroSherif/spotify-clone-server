const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "audio/mpeg") {
      cb(null, true);
    } else {
      console.log("Only mp3 files are allowed");
      cb(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});

module.exports = upload;
