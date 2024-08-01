const FlashSale = require('../../models/flashSaleModel');

const getAllFlashSales = async (req, res) => {
    try {
        const flashSales = await FlashSale.find();
        res.json({
            message: "All FlashSales",
            success: true,
            data: flashSales,
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

module.exports = getAllFlashSales;
