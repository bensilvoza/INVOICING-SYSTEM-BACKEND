let mongoose = require("mongoose");

let itemsSchema = new mongoose.Schema({
  productName: String,
  productQuantity: Number,
  productPrice: Number,
  subTotal: Number,
});

// main schema
let invoiceSchema = new mongoose.Schema({
  id: String,
  invoiceNumber: Number,
  invoiceDate: String,
  customerName: String,
  items: [itemsSchema],
  totalInvoiceAmount: Number,
});

let Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
