const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");
router.post("/addProduct",indexController.addProduct);
router.post("/getProduct",indexController.getProduct);
router.post("/addOrder",indexController.addOrder);
router.post("/checkAvailable",indexController.checkAvailable);
module.exports = router;