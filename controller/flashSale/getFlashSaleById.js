const FlashSale = require('../../models/flashSaleModel');

const getFlashSaleById = async (req, res) => {
    try {
        const flashSale = await FlashSale.findById(req.params.id);
        if (!flashSale) {
            return res.status(404).json({
                message: "FlashSale not found",
                success: false,
                error: true
            });
        }
        res.json({
            message: "FlashSale found",
            success: true,
            data: flashSale,
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

module.exports = getFlashSaleById;
