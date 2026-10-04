// Process Object - The process object is a built-in object in node.js. It provides information about the currently running application.

// const process = require('process');
// require('dotenv').config();
// const data = process.env.PORT;
// const PORT = process.env.PORT || 5000;

// console.log(PORT);

const http = require("http");
const PORT = process.env.PORT || 5000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("<h1>Hello, World!</h1>");
//     res.write("<p>This is a simple HTTP Server.</p>");
//     res.write("<p>Environmental Variable PORT: " + PORT + "</p>");
//     res.end();
// });

// server.listen(PORT, () => {
//     console.log("Server is running");
// });

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Hello, World!</h1>");
        res.write("<p>This is a simple HTTP Server.</p>");
        res.write("<p>Environmental Variable PORT: " + PORT + "</p>");
        res.end();

    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 NOT FOUND</h1>");
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});