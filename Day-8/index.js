// Custom Middleware
const express = require("express");
const app = express();

const middleware = (req, res, next) => {
    console.log("Middleware Executed");
    next();
}

const middleware2 = (req, res, next) => {
    console.log("Middleware2 Executed");
    next();
}

app.use(middleware);
app.use(middleware2);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});