const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voucherSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ['percentage', 'fixed'], // Chỉ chấp nhận 'percentage' hoặc 'fixed'
    required: true,
  },
  discount_amount: {
    type: Number,
    required: true,
  },
  discount_type: {
    type: String,
    enum: ['percent', 'fixed'], // Chỉ chấp nhận 'percent' hoặc 'fixed'
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  remaining_quantity: {
    type: Number,
    required: true,
  },
  min_order_value: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Voucher = mongoose.model('Voucher', voucherSchema);

module.exports = Voucher;
