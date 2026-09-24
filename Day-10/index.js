// const os = require('os');

// console.log("Operating System Information:");
// console.log(`Platform: ${os.platform()}`);
// console.log(`Architecture: ${os.arch()}`);
// console.log(`CPU Cores: ${os.cpus().length}`);
// console.log(`Total Memory: ${os.totalmem()} bytes`);
// console.log(`Free Memory: ${os.freemem()} bytes`);

const fs = require('fs');

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