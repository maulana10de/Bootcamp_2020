const express = require('express');
const router = express.Router();
const { carouselController } = require('../controllers');

// get method
router.get('/', carouselController.getCarousels);
// delete method
router.delete('/:id', carouselController.deleteCarousel);
// update method
router.patch('/:id', carouselController.editCarousel);
// post method
router.post('/', carouselController.postDataSlide);

module.exports = router;
