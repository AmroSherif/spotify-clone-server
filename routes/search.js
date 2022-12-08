const router = require("express").Router();
const auth = require("../middleware/auth");
const searchSong = require("../controllers/search");

router.get("/", auth, searchSong);

module.exports = router;
