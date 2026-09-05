const tourModel = require("../models/tourModel");

// Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();

    res.status(200).json(tours);
};

// Get tour by ID
const getTourById = (req, res) => {
    const id = parseInt(req.params.id);

    const tour = tourModel.getById(id);

    if (!tour) {
        return res.status(404).json({
            message: "Tour not found"
        });
    }

    res.status(200).json(tour);
};

// Add a new tour
const addTour = (req, res) => {
    const newTour = req.body;

    const tour = tourModel.add(newTour);

    res.status(201).json(tour);
};

// Delete tour by ID
const deleteTourById = (req, res) => {
    const id = parseInt(req.params.id);

    const deletedTour = tourModel.deleteById(id);

    if (!deletedTour) {
        return res.status(404).json({
            message: "Tour not found"
        });
    }

    res.status(200).json(deletedTour);
};

module.exports = {
    getAllTours,
    getTourById,
    addTour,
    deleteTourById
};
