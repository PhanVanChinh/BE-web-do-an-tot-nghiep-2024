const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number
    }],
    totalProductAmount: Number,
    shippingFee: { type: Number, default: 0 },
    totalOrderAmount: Number,
    status: { 
        type: String, 
        enum: ['Đang xử lý', 'Đã giao hàng', 'Đã hủy', 'Đặt hàng thành công', 'Chuyển khoản thành công', 'Đang giao hàng'],
        default: 'Đang xử lý' 
    },
    paymentMethod: { 
        type: String, 
        enum: ['Thanh toán khi nhận hàng', 'Thanh toán Online'] 
    },
    createdAt: { type: Date, default: Date.now },
    processingAt: { type: Date },
    shippedAt: { type: Date },
    cancelledAt: { type: Date }
}, {
    timestamps: true
});

orderSchema.pre('save', function(next) {
    if (this.isModified('status')) {
        const status = this.status;
        if (status === 'Đặt hàng thành công') {
          
            this.processingAt = new Date();
        } else if (status === 'Chuyển khoản thành công') {
           
            this.processingAt = new Date();
        } else if (status === 'Đang giao hàng') {
            
            this.shippedAt = new Date();
        } else if (status === 'Đã hủy') {
            this.cancelledAt = new Date();
        }
    }
    next();
});

const orderModel = mongoose.model('order', orderSchema);
module.exports = orderModel;
