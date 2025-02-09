const mongoose = require("mongoose");

const QuizResultSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    strengths: [String],
    weaknesses: [String],
    recommendedCareers: [String],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("QuizResult", QuizResultSchema);
