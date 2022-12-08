const router = require("express").Router();
const auth = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");

const {
  createPlaylist,
  editPlaylist,
  addSongToPlaylist,
  removeFromPlaylist,
  getUserPlaylists,
  getRandomPlaylists,
  getPlaylist,
  getAllPlaylists,
  deletePlaylist,
} = require("../controllers/playLists");

// create playlist
router.post("/", auth, createPlaylist);

// edit playlist by id
router.put("/edit/:id", [validateObjectId, auth], editPlaylist);

// add song to playlist
router.put("/add-song", auth, addSongToPlaylist);

// remove song from playlist
router.put("/remove-song", auth, removeFromPlaylist);

// user playlists
router.get("/favourite", auth, getUserPlaylists);

// get random playlists
router.get("/random", auth, getRandomPlaylists);

// get playlist by id
router.get("/:id", [validateObjectId, auth], getPlaylist);

// get all playlists
router.get("/", auth, getAllPlaylists);

// delete playlist by id
router.delete("/:id", [validateObjectId, auth], deletePlaylist);

module.exports = router;
