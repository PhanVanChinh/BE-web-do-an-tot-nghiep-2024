const orderModel = require('../../models/orderModel');

const getAllOrders = async (req, res) => {
    try {
        const allOrders = await orderModel.find()
            .populate('user', 'name email')
            .populate('products.product', 'name price')
            .sort({ createdAt: -1 });

        res.json({
            message: "All orders",
            success: true,
            data: allOrders,
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

module.exports = getAllOrders;
