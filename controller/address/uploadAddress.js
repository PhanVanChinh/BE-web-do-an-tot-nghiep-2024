const AddressDelivery = require("../../models/addressModel");
const User = require("../../models/userModel");

const UploadAddress = async (req, res) => {
    try {
        const { user, recipientName, address, phoneNumber } = req.body;

       
        if (!user || !recipientName || !address || !phoneNumber) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

       
        const newAddress = new AddressDelivery({ user, recipientName, address, phoneNumber });

      
        const savedAddress = await newAddress.save();

       
        await User.findByIdAndUpdate(
            user, 
            { $push: { addresses: savedAddress._id } },
            { new: true }
        );

        res.status(200).json({
            message: "Address uploaded successfully",
            success: true,
            data: savedAddress,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
};

module.exports = UploadAddress;

