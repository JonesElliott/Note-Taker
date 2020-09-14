const generateID = require("../scripts/idgenerator");
const writeMyFile = require("../scripts/writefile");

// ===============================================================================
// LOAD DATA
// ===============================================================================

var dbNotes = require("../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // -----------------------------------------------------------------------------
  app.get("/api/notes", function(req, res) {
    res.json(dbNotes);
  });


  // API POST Requests
  // -----------------------------------------------------------------------------
  app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    // Add to json string
    dbNotes.push(newNote);
    // Generate ID's for each element
    generateID(dbNotes);
    // Write data to file
    writeMyFile('./db/db.json', dbNotes);
    res.json(true);
  });

  
  // API DELETE Requests
  // -----------------------------------------------------------------------------
  app.delete("/api/notes/:id", function(req, res) {
      var note = parseInt(req.params.id);
      dbNotes.splice((note - 1), 1);
      generateID(dbNotes);
      writeMyFile('./db/db.json', dbNotes);
      res.json(true);
  });
};
