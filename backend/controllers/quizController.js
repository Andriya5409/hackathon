const QuizResult = require("../models/quizResultModel");

exports.saveQuizResults = async (req, res) => {
    try {
        const { userId, strengths, weaknesses, recommendedCareers } = req.body;

        const quizResult = new QuizResult({
            userId,
            strengths,
            weaknesses,
            recommendedCareers
        });

        await quizResult.save();
        res.status(201).json({ message: "Quiz results saved!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getQuizResults = async (req, res) => {
    try {
        const results = await QuizResult.findOne({ userId: req.params.userId });
        if (!results) return res.status(404).json({ message: "No results found" });

        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
