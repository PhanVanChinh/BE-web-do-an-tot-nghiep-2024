const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flashSaleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
    required: true
  },
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

const FlashSale = mongoose.model('FlashSale', flashSaleSchema);

module.exports = FlashSale;
