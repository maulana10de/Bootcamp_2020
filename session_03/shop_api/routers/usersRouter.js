const express = require('express');
const router = express.Router();
const { usersController } = require('../controllers');

// get method
router.get('/', usersController.getData);
router.post('/addUser', usersController.addUser);
router.post('/addAlamat', usersController.addAlamat);
router.post('/registerUser', usersController.registerUser);
router.patch('/updateUser/:id', usersController.updateUser);
router.get('/getAllData', usersController.getAllData);

module.exports = router;
