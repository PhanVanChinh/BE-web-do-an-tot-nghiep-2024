const orderModel = require('../../models/orderModel');

const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await orderModel.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({
                message: "Order not found",
                success: false,
                error: true
            });
        }
        res.json({
            message: "Order deleted successfully",
            success: true,
            data: deletedOrder,
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

module.exports = deleteOrder;
