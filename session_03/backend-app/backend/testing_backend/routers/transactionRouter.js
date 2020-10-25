const express = require('express');
const router = express.Router();
const { transactionController } = require('../controllers');

// get method
router.get('/', transactionController.getTransactions);
router.post('/', transactionController.addDataTransaction);

module.exports = router;
