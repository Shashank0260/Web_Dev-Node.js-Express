const FsPromise = require('fs/promises');

// // Create a new file
fs.writeFile('example.txt', 'Hello World!', (err) => {
    if (err) throw err;
    console.log('File Created Successfully');
});

// Delete a file
fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log("File Deleted Successfully");
});

// Crypto Module = The crypto module provides security features

const crypto = require('crypto');
const hash = crypto.createHash('sha256');
hash.update("Hello World!");
const digest = hash.digest('hex');
console.log('SHA-256 Hash: ${digest]');

console.log(crypto.randomUUID());