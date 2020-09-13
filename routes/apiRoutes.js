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
    res.json(dbNotes);
  });


  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
      dbNotes.push(req.body);
      res.json(true);
  });
  
  // Temporary Code to cleaer out the table while testing
  // ---------------------------------------------------------------------------
  app.post("/api/clear", function(req, res) {
    // Empty out the array of data
    dbNotes.length = 0;
    res.json({ ok: true });
  });
};
