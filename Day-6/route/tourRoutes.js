const express = require("express");
const router = express.Router();

const tourController = require("../controller/tourController");

router.get("/tours", tourController.getAllTours);
router.get("/tours/:id", tourController.getTourById);
router.post("/tours", tourController.addTour);
router.delete("/tours/:id", tourController.deleteTourById);
module.exports = router;