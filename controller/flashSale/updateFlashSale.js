const FlashSale = require('../../models/flashSaleModel');

const updateFlashSale = async (req, res) => {
    try {
        const updatedFlashSale = await FlashSale.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFlashSale) {
            return res.status(404).json({
                message: "FlashSale not found",
                success: false,
                error: true
            });
        }
        res.json({
            message: "FlashSale updated successfully",
            success: true,
            data: updatedFlashSale,
            error: false
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
            error: true
        });
    }
};

module.exports = updateFlashSale;
