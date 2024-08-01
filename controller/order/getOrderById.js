const orderModel = require('../../models/orderModel');

const getOrderById = async (req, res) => {
    try {
        const order = await orderModel.findById(req.params.id)
            .populate('user', 'name email')
            .populate('products.product', 'name price');
        if (!order) {
            return res.status(404).json({
                message: "Order not found",
                success: false,
                error: true
            });
        }
        res.json({
            message: "Order found",
            success: true,
            data: order,
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

module.exports = getOrderById;
