const FlashSale = require('../../models/flashSaleModel');

const createFlashSale = async (req, res) => {
    try {
        const flashSale = new FlashSale(req.body);
        await flashSale.save();
        res.status(201).json({
            message: "FlashSale created successfully",
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

module.exports = createFlashSale;
