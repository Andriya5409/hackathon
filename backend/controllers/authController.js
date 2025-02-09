const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, "your_secret_key", { expiresIn: "1h" });

        // Set token as HTTP cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 3600000, // 1 hour
        });

        console.log("Stored Token:", token);  // ✅ Print token to console


        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {

    console.log("pritned nothing");
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, "your_secret_key", { expiresIn: "1h" });

         // Set token as HTTP cookie
         res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 3600000, // 1 hour
        });

        console.log("Stored Token:", token);  // ✅ Print token to console

        res.json({ message: "Login Successful", userId: user._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};