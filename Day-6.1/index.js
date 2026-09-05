const express = require("express");
const app = express();
app.use(express.json());

const userRoutes = require("./route/userRoutes");
app.use("/api", userRoutes);

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});