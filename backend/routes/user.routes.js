const express = require("express");
const userController = require("../controllers/user.controller");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

router.get("/", protectRoute , userController.getUsers);

module.exports = router;