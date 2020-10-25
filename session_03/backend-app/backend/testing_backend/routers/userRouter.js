const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');

// get method
router.get('/getUsers', userController.getUsers);
router.get('/getLogin', userController.getLogin);
router.get('/getKeepLogin/:id', userController.getKeepLogin);
router.patch('/addToCart/:id', userController.addToCart);
router.patch('/refreshCart/:id', userController.refreshCart);

module.exports = router;
