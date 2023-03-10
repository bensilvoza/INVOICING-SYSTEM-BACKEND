// libraries
const express = require("express");
const router = express.Router();

// controllers
let { register } = require("../../controllers/account/register");

router.post("/register", register);

module.exports = router;
