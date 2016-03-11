var mongoose = require('mongoose');
var Category = require('./category');

var productSchema = {
  name: { type: String, required: true },
  // Pictures must start with "http://"
  pictures: [{ type: String, match: /^http:\/\//i, require: true }],
  price: {
    amount: { type: Number, required: true },
    currency: { type: String, enum: ['USD', 'EUR', 'GBP'], required: true }
  },
  category: Category.categorySchema
}

module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;