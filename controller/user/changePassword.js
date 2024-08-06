const bcrypt = require('bcryptjs');
const userModel = require('../../models/userModel');
const jwt = require('jsonwebtoken');

async function changePasswordController(req, res) {
    try {
        const { currentPassword, newPassword, confirmNewPassword } = req.body;
        const userId = req.userId;

       
        if (!currentPassword || !newPassword || !confirmNewPassword) {
            throw new Error("Please provide current password, new password, and confirm new password");
        }
        if (newPassword !== confirmNewPassword) {
            throw new Error("New password and confirm new password do not match");
        }

        
        const user = await userModel.findById(userId);

        
        const checkPassword = await bcrypt.compare(currentPassword, user.password);
        if (!checkPassword) {
            throw new Error("Incorrect current password");
        }

      
        const salt = bcrypt.genSaltSync(10);
        const hashNewPassword = await bcrypt.hashSync(newPassword, salt);

       
        user.password = hashNewPassword;
        await user.save();

        res.status(200).json({
            message: "Password updated successfully",
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || "Failed to update password",
            error: true,
            success: false,
        });
    }
}

module.exports = changePasswordController;
