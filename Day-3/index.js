// Delete Operation 

// application.delete("/students/:index", (req, res) => {
//     const index = req.params.index;
//     students.splice(index, 1);
//     res.send("Student Deleted Successfully")
// })

const express = require("express");
const app = express();
const packages = require("./tour");

app.get("/packages", (req, res) => {
    res.json(packages);
});

app.get("/packages/:id", (req, res) => {
    const packageId = parseInt(req.params.id);

    const tourPackage = packages.find((pkg) => pkg.id === packageId);
    if (!tourPackage) {
        return res.status(404).json({
            message: "Package not found"
        });
    }
    res.json(tourPackage);
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});