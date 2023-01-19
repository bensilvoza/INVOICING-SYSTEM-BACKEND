// Libraries
const express = require("express");
const router = express.Router();

// Controllers
let { readAll } = require("../../controllers/invoice/readAll");

router.get("/invoice", readAll);

module.exports = router;
