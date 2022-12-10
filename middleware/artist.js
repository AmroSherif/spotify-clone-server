const { User } = require("../models/user");

module.exports = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  console.log(user.isArtist);
  console.log(user.artistSongs);
  if (user.isArtist) {
    const song = await user.artistSongs.includes(req.params.id);
    if (song) {
      console.log("Just for Debugging ");
      next();
    } else {
      res.status(403).send({ message: "You don't own this song" });
    }
  } else {
    res.status(403).send({ message: "Not an Artist" });
  }
  next();
};
