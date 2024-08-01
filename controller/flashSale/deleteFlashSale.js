const FlashSale = require('../../models/flashSaleModel');

const deleteFlashSale = async (req, res) => {
    try {
        const deletedFlashSale = await FlashSale.findByIdAndDelete(req.params.id);
        if (!deletedFlashSale) {
            return res.status(404).json({
                message: "FlashSale not found",
                success: false,
                error: true
            });
        }
        res.json({
            message: "FlashSale deleted successfully",
            success: true,
            data: deletedFlashSale,
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

module.exports = deleteFlashSale;
