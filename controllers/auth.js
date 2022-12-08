const { User } = require("../models/user");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send({ message: "invalid email!" });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send({ message: "Invalid password!" });

  const token = user.generateAuthToken();
  res
    .status(200)
    .send({ data: token, message: "You are signed in successfully" });
};

module.exports = loginUser;
