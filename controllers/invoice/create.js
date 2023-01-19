// Models
const Invoice = require("../../models/invoice");

async function create(req, res) {
  let invoice = new Invoice(req.body);
  await invoice.save();
  res.json({ message: "OK" });
}

module.exports = {
  create,
};
