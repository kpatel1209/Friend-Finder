// "/" = default for catch-all route
// GET route for "/survey" = survery page

// Need to require "path" pkg to obtain correct file path for html
const path = require("path");

module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};