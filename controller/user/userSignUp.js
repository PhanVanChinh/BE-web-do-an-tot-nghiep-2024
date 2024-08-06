const userModel = require("../../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const transporter = require('../../config/emailConfig');

async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body;

        const user = await userModel.findOne({ email });

        if (user) {
            throw new Error("Already user exits.");
        }

        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }
        if (!name) {
            throw new Error("Please provide name");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error("Something is wrong");
        }

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword,
            isVerified: false
        };

        const userData = new userModel(payload);
        const saveUser = await userData.save();

        
        const token = jwt.sign({ email: saveUser.email }, process.env.TOKEN_SECRET_KEY, { expiresIn: '1h' });

       
        const verifyUrl = `http://localhost:4000/api/users/verify-email?token=${token}`;
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Email Verification',
            text: `Please verify your email by clicking on the link: ${verifyUrl}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                throw new Error("Something went wrong while sending the email");
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created successfully! Please check your email to verify your account."
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignUpController;
