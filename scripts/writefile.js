// ===============================================================================
// File Writer
// input path and file to write to
// ===============================================================================
const fs = require('fs');
var path = require("path");

function writeMyFile(filePath, file) {
    fs.writeFile(path.join(filePath), JSON.stringify(file), (error) => {
        if (error) {
            throw error;
        }
    })
}

module.exports = writeMyFile;