const express = require("express");
const { saveChat, getChatHistory } = require("../controllers/chatController");

const router = express.Router();

router.post("/save", saveChat);
router.get("/:userId", getChatHistory);

module.exports = router;
