// ===============================================================================
// DEPENDENCIES
// Include the path package to get the correct file path for the html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // ---------------------------------------------------------------------------

  // Route to home page
  app.get("/", function(req, res) {
    console.log("Home Page Requested");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Route to notes page
  app.get("/notes", function(req, res) {
    console.log("Notes Page Requested");
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // Route to index.js file for front end requests
  app.get("/assets/js/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
  });

//   If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log("No Route Found: Returned Home Page");
  });
};
