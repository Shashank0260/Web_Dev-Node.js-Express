const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tour.json");

// Get all tours
const getAll = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
};

// Get tour by ID
const getById = (id) => {
    const tours = getAll();
    return tours.find((tour) => tour.id === id);
};

// Add new tour
const addTour = (newTour) => {
    const tours = getAll();

    tours.push(newTour);

    fs.writeFileSync(
        filePath,
        JSON.stringify(tours, null, 2)
    );

    return newTour;
};

// Update tour
const updateTour = (id, updatedTourData) => {
    const tours = getAll();

    const index = tours.findIndex((tour) => tour.id === id);

    if (index === -1) {
        return null;
    }

    tours[index] = {
        ...tours[index],
        ...updatedTourData,
        id: id
    };

    fs.writeFileSync(
        filePath,
        JSON.stringify(tours, null, 2)
    );

    return tours[index];
};

// Search tours by destination
const searchTour = (destination) => {
    const tours = getAll();

    return tours.filter(
        (tour) =>
            tour.destination.toLowerCase() ===
            destination.toLowerCase()
    );
};

// Delete tour by ID
const deleteTourById = (id) => {
    const tours = getAll();

    const tourExists = tours.some((tour) => tour.id === id);

    if (!tourExists) {
        return null;
    }

    const updatedTours = tours.filter(
        (tour) => tour.id !== id
    );

    fs.writeFileSync(
        filePath,
        JSON.stringify(updatedTours, null, 2)
    );

    return true;
};

module.exports = {
    getAll,
    getById,
    addTour,
    updateTour,
    searchTour,
    deleteTourById
};
