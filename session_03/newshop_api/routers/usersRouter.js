const express = require('express');
const router = express.Router();
const { usersController } = require('../controllers');

// get method
router.post('/regis', usersController.register);
router.get('/login', usersController.login);
router.get('/keepLogin/:id', usersController.keepLogin);
router.get('/profile/:id', usersController.keepLogin);

router.post('/addToCart', usersController.addToCart);
router.get('/getCart/:iduser', usersController.getCart);
router.patch('/updateCartQty/:idcart', usersController.updateQtyInCart);
router.delete('/deleteCart/:idcart', usersController.deleteCart);

module.exports = router;
