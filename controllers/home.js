// Libraries
const express = require("express");

// Models
const Invoice = require("../models/invoice");

async function home(req, res) {
  let products = await Product.find();
  res.json({ message: "OK", result: products });
}

module.exports = {
  home,
};
