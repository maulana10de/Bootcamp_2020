const express = require('express');
const router = express.Router();
const { transactionController } = require('../controllers');

// get method
router.post('/', transactionController.postDataToTransaction);

module.exports = router;
