const express = require("express");
const { saveQuizResults, getQuizResults } = require("../controllers/quizController");

const router = express.Router();

router.post("/save", saveQuizResults);
router.get("/:userId", getQuizResults);

module.exports = router;
