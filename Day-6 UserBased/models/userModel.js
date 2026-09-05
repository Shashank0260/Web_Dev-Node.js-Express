const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/user.json");

// Get all users
const getAll = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
};

// Get user by ID
const getById = (id) => {
    const users = getAll();
    return users.find((user) => user.id === id);
};

// Add new user
const adduser = (newuser) => {
    const users = getAll();

    users.push(newuser);

    fs.writeFileSync(
        filePath,
        JSON.stringify(users, null, 2)
    );

    return newuser;
};

// Update user
const updateuser = (id, updateduserData) => {
    const users = getAll();

    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
        return null;
    }

    users[index] = {
        ...users[index],
        ...updateduserData,
        id: id
    };

    fs.writeFileSync(
        filePath,
        JSON.stringify(users, null, 2)
    );

    return users[index];
};

// Search users by destination
const searchuser = (destination) => {
    const users = getAll();

    return users.filter(
        (user) =>
            user.destination.toLowerCase() ===
            destination.toLowerCase()
    );
};

// Delete user by ID
const deleteuserById = (id) => {
    const users = getAll();

    const userExists = users.some((user) => user.id === id);

    if (!userExists) {
        return null;
    }

    const updatedusers = users.filter(
        (user) => user.id !== id
    );

    fs.writeFileSync(
        filePath,
        JSON.stringify(updatedusers, null, 2)
    );

    return true;
};

module.exports = {
    getAll,
    getById,
    adduser,
    updateuser,
    searchuser,
    deleteuserById
};
