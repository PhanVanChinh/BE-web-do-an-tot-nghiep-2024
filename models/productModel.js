const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: String,
    brandName: String,
    category: String,
    productImage: [String],
    description: String,
    price: Number,
    sellingPrice: Number,
    dimensions: {
        length: Number,
        width: Number,
        height: Number
    },
    weight: Number,
    suppliers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' }]
}, {
    timestamps: true
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;