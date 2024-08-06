const ProductModel = require('../../models/productModel');
const SupplierModel = require('../../models/supplierModel');

const getProductsBySupplier = async (req, res) => {
    try {
        const { supplierId } = req.body; 

        
        const supplier = await SupplierModel.findById(supplierId);

        if (!supplier) {
            return res.status(404).json({
                success: false,
                error: true,
                message: 'Supplier not found'
            });
        }

        
        const productIds = supplier.productsSupplied;

        
        let products = [];

       
        for (const productId of productIds) {
            const product = await ProductModel.findById(productId);
            if (product) {
                products.push(product);
            }
        }

        res.status(200).json({ 
            success: true,
            error: false,
            message: 'Products fetched successfully',
            data: products 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: true,
            message: error.message || 'Failed to fetch products'
        });
    }
};

module.exports = getProductsBySupplier;
