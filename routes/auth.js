const router = require("express").Router();
const loginUser = require("../controllers/auth");

router.post("/", loginUser);

module.exports = router;
