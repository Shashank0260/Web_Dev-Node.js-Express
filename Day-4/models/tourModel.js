const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../data/tour.json");

// Get all
const getAllTours = ()=> {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
}

// Get by Id
const getTourById = (id)=> {
    const tours = getAllTours();
    return tours.find((tour) => tour.id === Number(id));
}

// Add new Tour
const addTour = (newTour)=> {
    const tours = getAllTours();
    tours.push(newTour);
    fs.writeFileSync(filepath, JSON.stringify(tours));
    return newTour;
}

module.exports = {
    getAllTours,
    getTourById,
    addTour
};