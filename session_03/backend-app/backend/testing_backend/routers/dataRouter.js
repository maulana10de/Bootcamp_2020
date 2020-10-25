const { dataController } = require('../controllers');
const express = require('express');
const router = express.Router();

// get method
router.get('/getData', dataController.getData);
// post method
router.post('/postData', dataController.postData);
// delete method
router.delete('/deleteData/:id', dataController.deleteData);
// put method
router.put('/updateDataPut', dataController.updateDataPut);
// patch method
router.patch('/updateDataPatch', dataController.updateDataPatch);

module.exports = router;
