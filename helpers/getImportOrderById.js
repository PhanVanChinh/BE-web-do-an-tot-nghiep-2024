const importOrderModel = require('../models/importOrderModel');

const getImportOrderById = async (req, res) => {
    try {
        const orderId = req.body.orderId; 
        const importOrder = await importOrderModel.findById(orderId); 
        if (!importOrder) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Import order not found"
            });
        }
    
        return res.json({
            success: true,
            error: false,
            data: importOrder
        });
    } catch (error) {
       
        console.error("Error while fetching import order by ID:", error);
        return res.status(500).json({
            success: false,
            error: true,
            message: "Internal server error"
        });
    }
};

module.exports = getImportOrderById;
