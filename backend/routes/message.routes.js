const express = require("express");
const messageController = require("../controllers/message.controller");
const protectRoute = require("../middleware/protectRoute");
const router = express.Router();

router.post("/send/:id", protectRoute, messageController.sendMessage);
router.get("/:id", protectRoute, messageController.getMessages);

module.exports = router;
