const { User } = require("../models/user");

module.exports = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (user.isArtist) {
    next();
  } else {
    return res.status(403).send({ message: "You are not an artist" });
  }
};
