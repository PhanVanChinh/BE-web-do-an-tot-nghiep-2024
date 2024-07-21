const mongoose = require('mongoose');

const wareHouseSchema = new mongoose.Schema({
    warehouseName: String,
    warehousePhoneNumber: String,
    warehouseAddress: String,
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 0 }
    }],
  
}, {
    timestamps: true
});

const warehouseModel = mongoose.model('warehouse', wareHouseSchema);
module.exports = warehouseModel;
