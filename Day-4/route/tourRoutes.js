const express = require("express");
const router = express.Router();
const tourController = require("../controller/tourController");

//get all tours
router.get("/tours", tourController.getAllTours);

module.exports = router;
