// ===============================================================================
// ID Generator
// Generates a unique id item for each object in an array
// ===============================================================================

function generateID(dbNotes) {
    for (let i = 0; i < dbNotes.length; i++) {
        dbNotes[i].id = i + 1;
    }
}

module.exports = generateID;