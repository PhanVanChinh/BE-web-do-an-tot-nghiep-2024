const orderModel = require('../../models/orderModel');

const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await orderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({
                message: "Order not found",
                success: false,
                error: true
            });
        }
        res.json({
            message: "Order updated successfully",
            success: true,
            data: updatedOrder,
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

module.exports = updateOrder;
