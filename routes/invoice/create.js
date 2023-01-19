// Libraries
const express = require("express");
const router = express.Router();

// Controllers
let { create } = require("../../controllers/invoice/create");

// middleware
let verifyToken = require("../../middleware/verifyToken");

router.post("/invoice/create", verifyToken, create);

module.exports = router;
