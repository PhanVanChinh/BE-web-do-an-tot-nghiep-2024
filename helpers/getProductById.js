const getProductById = async (req, res) => {
    try {
        const productId = req.params.productId; 
        const product = await productModel.findById(productId); 
        if (!product) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Product not found"
            });
        }
        
        return res.json({
            success: true,
            error: false,
            data: product
        });
    } catch (error) {
        
        console.error("Error while fetching product by ID:", error);
        return res.status(500).json({
            success: false,
            error: true,
            message: "Internal server error"
        });
    }
};

module.exports = getProductById;
