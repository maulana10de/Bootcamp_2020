const express = require('express');
const router = express.Router();
const { usersController } = require('../controllers');

// get method
router.post('/regis', usersController.register);
router.get('/login', usersController.login);
router.get('/keepLogin/:id', usersController.keepLogin);

module.exports = router;
