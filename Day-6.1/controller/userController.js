const userModel = require("../models/userModel");

// Get all users
const getAllusers = (req, res) => {
    const users = userModel.getAll();

    res.status(200).json(users);
};

// Get user by ID
const getuserById = (req, res) => {
    const id = parseInt(req.params.id);

    const user = userModel.getById(id);

    if (!user) {
        return res.status(404).json({
            message: "user not found"
        });
    }

    res.status(200).json(user);
};

// Add a new user
const adduser = (req, res) => {
    const newuser = req.body;

    const user = userModel.add(newuser);

    res.status(201).json(user);
};

// Delete user by ID
const deleteuserById = (req, res) => {
    const id = parseInt(req.params.id);

    const deleteduser = userModel.deleteById(id);

    if (!deleteduser) {
        return res.status(404).json({
            message: "user not found"
        });
    }

    res.status(200).json(deleteduser);
};

module.exports = {
    getAllusers,
    getuserById,
    adduser,
    deleteuserById
};
