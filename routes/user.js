const router = require("express").Router();
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getStatiscs,
} = require("../controllers/user");

// create user
router.post("/", createUser);

// get all users
router.get("/", admin, getUsers);

// get user by id
router.get("/:id", [validateObjectId, auth], getUser);

// update user by id
router.put("/:id", [validateObjectId, auth], updateUser);

// delete user by id
router.delete("/:id", [validateObjectId, admin], deleteUser);

// get statiscs on users
router.get("/show/statistics", admin, getStatiscs);

module.exports = router;
