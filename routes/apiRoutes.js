const { error } = require("console");
const { response, text } = require("express");
const fs = require('fs');
var path = require("path");
const generateID = require("../scripts/idgenerator");
const writeMyFile = require("../scripts/writefile");

// ===============================================================================
// LOAD DATA
// ===============================================================================

var dbNotes = require("../db/db.json");
const { title } = require("process");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // -----------------------------------------------------------------------------
  app.get("/api/notes", function(req, res) {
    console.log("Notes Read Request (GET)");
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
      console.log("This is note: " + note);

      dbNotes.splice((note - 1), 1);
      generateID(dbNotes);
      writeMyFile('./db/db.json', dbNotes);
      res.json(true);
  });
  

  // Temporary Code to cleaer out the table while testing
  // -----------------------------------------------------------------------------
  app.post("/api/clear", function(req, res) {
    console.log("Clear the db.json file");
    // Empty out the array of data
    dbNotes.length = 0;
    res.json({ ok: true });
  });
};
