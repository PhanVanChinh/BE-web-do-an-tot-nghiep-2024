const orderModel = require('../../models/orderModel');

const createOrder = async (req, res) => {
    try {
        const newOrder = new orderModel(req.body);
        await newOrder.save();
        res.status(201).json({
            message: "Order created successfully",
            success: true,
            data: newOrder,
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

module.exports = createOrder;
