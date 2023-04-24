const express = require('express');
// Importing to a tourController object
// then using the properties of object imported.
const tourController = require('./../controllers/tourController');

const router = express.Router();

// for checking valid id -
// param middleware -
//router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
