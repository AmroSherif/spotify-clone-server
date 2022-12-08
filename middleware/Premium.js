const { User } = require("../models/user");

module.exports = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (
    !user.isPremium &&
    user.recentSongs.length > 0 &&
    user.recentSongs.length % 3 == 0
  ) {
    req.params.id = null;
  }
  next();
};
