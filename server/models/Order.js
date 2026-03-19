const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  cartItems: Array,
  totalAmount: Number,
  address: String,
  phone: String
});

module.exports = mongoose.model("Order", orderSchema);