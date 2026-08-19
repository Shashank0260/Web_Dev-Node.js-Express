const tourModel = require("../models/tourModel");

//Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAllTours();
    res.json(tours);
};

module.exports = {
    getAllTours
};