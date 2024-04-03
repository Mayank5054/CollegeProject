const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");
router.post("/addProduct",indexController.addProduct);
router.get("/getProduct",indexController.getProduct);
module.exports = router;