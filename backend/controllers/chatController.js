const Chat = require("../models/chatModel");

exports.saveChat = async (req, res) => {
    try {
        const { userId, userMessage, botResponse } = req.body;

        const chat = await Chat.findOne({ userId });
        if (chat) {
            chat.messages.push({ userMessage, botResponse });
            await chat.save();
        } else {
            const newChat = new Chat({
                userId,
                messages: [{ userMessage, botResponse }]
            });
            await newChat.save();
        }

        res.status(201).json({ message: "Chat saved!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getChatHistory = async (req, res) => {
    try {
        const chat = await Chat.findOne({ userId: req.params.userId });
        res.json(chat || { messages: [] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
