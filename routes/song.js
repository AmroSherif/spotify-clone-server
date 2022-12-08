const router = require("express").Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const {
  createSong,
  getSongs,
  updateSong,
  deleteSong,
  likeSong,
  getLikedSongs,
} = require("../controllers/song");

// Create song
router.post("/", admin, createSong);

// Get all songs
router.get("/", getSongs);

// Update song
router.put("/:id", [validateObjectId, admin], updateSong);

// Delete song by ID
router.delete("/:id", [validateObjectId, admin], deleteSong);

// Like song
router.put("/like/:id", [validateObjectId, auth], likeSong);

// Get liked songs
router.get("/like", auth, getLikedSongs);

module.exports = router;
