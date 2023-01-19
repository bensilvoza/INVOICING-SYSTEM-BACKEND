// Models
const Invoice = require("../../models/invoice");

async function readAll(req, res) {
  let invoice = await Invoice.find();
  res.json({ message: "OK", result: invoice });
}

module.exports = {
  readAll,
};
