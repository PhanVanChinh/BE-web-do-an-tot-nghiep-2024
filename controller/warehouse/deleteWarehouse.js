const Warehouse = require('../../models/warehouseModel');
const Product = require('../../models/productModel');
const ImportOrder = require('../../models/importOrderModel');

const deleteWarehouse = async (req, res) => {
    const { id } = req.params;

    try {
       
        const warehouse = await Warehouse.findById(id);
        if (!warehouse) {
            return res.status(404).json({ message: 'Warehouse not found', success: false });
        }

        
        await warehouse.remove();

        res.json({ message: 'Warehouse deleted successfully', success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

module.exports = deleteWarehouse;
