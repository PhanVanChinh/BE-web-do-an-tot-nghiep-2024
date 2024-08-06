const uploadProductPermission = require("../../helpers/permission");
const productModel = require("../../models/productModel");


const uploadProduct = async (req, res) => {
    try {
        const sessionUserId = req.userId;

        if (!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied");
        }

       
        const uploadProduct = new productModel(req.body);
        const saveProduct = await uploadProduct.save();

       
        const productId = saveProduct._id;

        
        await supplierModel.updateMany(
            { _id: { $in: req.body.suppliers} },
            { $push: { productsSupplied:  productId } }
        );

        res.status(200).json({
            message: "Product uploaded successfully",
            error: false,
            success: true,
            data: saveProduct
        });

    } catch (err) {
        res.status(401).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = uploadProduct;
