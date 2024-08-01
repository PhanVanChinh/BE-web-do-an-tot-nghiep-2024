const userModel = require("../../models/userModel");
const jwt = require('jsonwebtoken');

async function verifyEmailController(req, res) {
    try {
        const token = req.query.token;
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);

        const user = await userModel.findOne({ email: decoded.email });

        if (!user) {
            throw new Error("User does not exist");
        }

        user.isVerified = true;
        await user.save();

        res.json({
            message: "Email verified successfully!",
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = verifyEmailController;
