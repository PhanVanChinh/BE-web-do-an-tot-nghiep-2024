const productModel = require("../../models/productModel");

const deleteCategory = async (req, res) => {
    try {
        const { category } = req.body;

        if (!category) {
            return res.status(400).json({
                message: "Category is required",
                error: true,
                success: false
            });
        }

        // Xóa tất cả các sản phẩm thuộc danh mục này
        const deleteResult = await productModel.deleteMany({ category });

        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({
                message: "No products found in this category",
                error: true,
                success: false
            });
        }

        res.json({
            message: `Successfully deleted ${deleteResult.deletedCount} products in the category "${category}"`,
            success: true,
            error: false
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Internal server error",
            error: true,
            success: false
        });
    }
};

module.exports = deleteCategory;
