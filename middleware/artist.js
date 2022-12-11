const { User } = require("../models/user");

module.exports = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (user.isArtist) {
    const song = user.artistSongs.includes(req.params.id);
    if (song) {
      next();
    } else {
      res.status(403).send({ message: "You don't own this song" });
    }
  } else {
    res.status(403).send({ message: "Not an Artist" });
  }
};
