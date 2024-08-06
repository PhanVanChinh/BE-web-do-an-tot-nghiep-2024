const Supplier = require("../../models/supplierModel");
const Product = require('../../models/productModel');
const ImportOrder = require('../../models/importOrderModel');

async function updateSupplier(req, res) {
    const { id, updateData } = req.body;

    if (!id || !updateData) {
        return res.status(400).json({ message: 'Invalid request' });
    }

    try {
      
        const supplier = await Supplier.findByIdAndUpdate(id, updateData, { new: true });

        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

   
        if (updateData.productsSupplied) {
           
            await Product.updateMany(
                { suppliers: id },
                { $pull: { suppliers: id } }
            );
            
            await Product.updateMany(
                { _id: { $in: updateData.productsSupplied } },
                { $addToSet: { suppliers: id } }
            );
        }

        
        if (updateData.orders) {
            
            await ImportOrder.updateMany(
                { supplier: id },
                { $pull: { supplier: id } }
            );
            
            await ImportOrder.updateMany(
                { _id: { $in: updateData.orders } },
                { $addToSet: { supplier: id } }
            );
        }

        res.json(({
            message: 'Supplier updated successfully',
            error: false,
            success: true,
            data: supplier,
        }));
    } catch (error) {
        res.status(500).json({ 
            message: error.message,
            success: false,
            error: true,
        });
    }
}

module.exports = updateSupplier;
