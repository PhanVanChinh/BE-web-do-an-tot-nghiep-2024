const uploadProductPermission = require('../../helpers/permission');
const importOrderModel = require('../../models/importOrderModel');
const warehouseModel = require('../../models/warehouseModel');

const updateImportOrder = async (req, res) => {
    try {
        
        if (!uploadProductPermission(req.userId)) {
            throw new Error("Permission denied");
        }

        
        const { _id, warehouse, products, ...resBody } = req.body;

        const oldImportOrder = await importOrderModel.findById(_id);
        if (!oldImportOrder) {
            throw new Error("Import Order not found");
        }

        const updatedImportOrder = await importOrderModel.findByIdAndUpdate(_id, { ...resBody, warehouse, products }, { new: true });

       
        if (warehouse !== oldImportOrder.warehouse.toString()) {
            const oldWarehouse = await warehouseModel.findById(oldImportOrder.warehouse);
            const newWarehouse = await warehouseModel.findById(warehouse);

            if (oldWarehouse) {
               
                oldWarehouse.products = oldWarehouse.products.filter(p => !products.some(prod => prod.product.toString() === p.product.toString()));
                oldWarehouse.importOrder = oldWarehouse.importOrder.filter(orderId => orderId.toString() !== _id);
                await oldWarehouse.save();
            }

            if (newWarehouse) {
               
                for (const product of products) {
                    const productIndex = newWarehouse.products.findIndex(p => p.product.toString() === product.product.toString());
                    if (productIndex !== -1) {
                        newWarehouse.products[productIndex].quantity += product.quantity;
                    } else {
                        newWarehouse.products.push({ product: product.product, quantity: product.quantity });
                    }
                }
                newWarehouse.importOrder.push(updatedImportOrder._id);
                await newWarehouse.save();
            }
        } else {
           
            const existingWarehouse = await warehouseModel.findById(warehouse);
            if (!existingWarehouse) {
                throw new Error("Selected warehouse not found");
            }

            for (const product of products) {
                const productIndex = existingWarehouse.products.findIndex(p => p.product.toString() === product.product.toString());
                if (productIndex !== -1) {
                    existingWarehouse.products[productIndex].quantity += product.quantity;
                } else {
                    existingWarehouse.products.push({ product: product.product, quantity: product.quantity });
                }
            }

            await existingWarehouse.save();
        }

        res.status(200).json({
            message: "Import Order updated successfully",
            data: updatedImportOrder,
            success: true,
            error: false
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || 'Failed to update import order',
            error: true,
            success: false
        });
    }
}

module.exports = updateImportOrder;

