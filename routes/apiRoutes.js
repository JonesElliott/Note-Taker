const { error } = require("console");
const { response } = require("express");
const fs = require('fs');
var path = require("path");

// ===============================================================================
// LOAD DATA
// ===============================================================================

var dbNotes = require("../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------
  app.get("/api/notes", function(req, res) {
    console.log("Notes Read Request (GET)");
    res.json(dbNotes);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------
  app.post("/api/notes", function(req, res) {
    // var notes = JSON.parse(req.body);
    console.log("Notes Write Request (POST)");
    console.log("Request: " + JSON.stringify(req.body));

    for (let i = 0; i < dbNotes.length; i++) {
        req.body.id = i + 1;
    }

    dbNotes.push(req.body);
    fs.writeFile(path.join('./db/db.json'), JSON.stringify(dbNotes), (error) => {
        if (error) {
            throw error;
        }
        console.log("Data written to db.json file!");
    });
    console.log("Request: " + JSON.stringify(req.body));
    // res.json(true);
  });
  
  // API DELETE Requests
  // ---------------------------------------------------------------------------
  app.delete("/api/notes/:id", function(req, res) {
      var note = req.params.id;
      console.log("Notes: " + note);
      console.log("Notes Delete Request (POST)");
      dbNotes.splice(note, req.body);
      res.json(true);
  });
  
  // Temporary Code to cleaer out the table while testing
  // ---------------------------------------------------------------------------
  app.post("/api/clear", function(req, res) {
    console.log("Clear the db.json file");
    // Empty out the array of data
    dbNotes.length = 0;
    res.json({ ok: true });
  });
};
