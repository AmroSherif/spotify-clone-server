const router = require("express").Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const artist = require("../middleware/artist");
const validateObjectId = require("../middleware/validateObjectId");
const {
  createSong,
  getSongs,
  updateSong,
  deleteSong,
  likeSong,
  getLikedSongs,
  getSong,
} = require("../controllers/song");
const uploadAudio = require("../middleware/uploadAudio");
const premium = require("../middleware/Premium");
const validateArtist = require("../middleware/validateArtist");

// Create song
router.post(
  "/",
  [auth, validateArtist, uploadAudio.single("audio")],
  createSong
);

// Get all songs
router.get("/", getSongs);

// Update song
router.put("/:id", [auth, validateObjectId, artist], updateSong);

// Delete song by ID
router.delete("/:id", [auth, validateObjectId, artist], deleteSong);

// Like song
router.put("/like/:id", [validateObjectId, auth], likeSong);

// Get liked songs
router.get("/like", auth, getLikedSongs);

// Play song
router.get("/:id", [validateObjectId, auth, premium], getSong);

module.exports = router;
