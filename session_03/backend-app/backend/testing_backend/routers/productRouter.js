const express = require('express');
const router = express.Router();
const { productController } = require('../controllers');

// get all products method
router.get('/getProducts', productController.getProducts);
// get product by id method
router.get('/detail', productController.getProductById);
// delete product by id method
router.delete('/:id', productController.deleteProductById);
// edit product by id method
router.patch('/:id', productController.editProduct);
// update stock by id method
router.patch('/updateStock/:id', productController.updateStockById);

module.exports = router;
