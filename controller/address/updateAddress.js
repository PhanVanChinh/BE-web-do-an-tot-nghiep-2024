const AddressDelivery = require("../../models/addressModel");

const updateAddress = async (req, res) => {
    try {
        const { addressId, recipientName, address, phoneNumber } = req.body;

        
        if (!addressId || !recipientName || !address || !phoneNumber) {
            return res.status(400).json({
                message: "All fields (addressId, recipientName, address, phoneNumber) are required",
                success: false
            });
        }

       
        const payload = {
            recipientName,
            address,
            phoneNumber
        };

        
        const updatedAddress = await AddressDelivery.findByIdAndUpdate(
            addressId,
            payload,
            { new: true } 
        );

        if (!updatedAddress) {
            return res.status(404).json({
                message: "Address not found",
                success: false
            });
        }

        res.json({
            data: updatedAddress,
            message: "Address updated successfully",
            success: true
        });
    } catch (error) {
        console.error("Error updating address:", error);
        res.status(500).json({
            message: error.message || "Internal server error",
            success: false
        });
    }
};

module.exports = updateAddress;
