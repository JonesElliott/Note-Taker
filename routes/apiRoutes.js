const { response } = require("express");
// ===============================================================================
// LOAD DATA
// ===============================================================================

var dbNotes = require("../db/db");

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
    console.log("Notes Write Request (POST)");
    dbNotes.push(req.body);
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
