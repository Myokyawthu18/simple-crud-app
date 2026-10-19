const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deletedProduct} = require('../controllers/product.controller.js');



router.get('/', getProducts );
router.get("/:id", getProcuct);

router.post("/", createProduct);

//update a product
router.put("/:id", updateProduct);

//delete a product
router.delete("/:id", deletedProduct);


module.exports = router;