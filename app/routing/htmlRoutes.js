// Require "path" pkg to obtain correct file path for html
const path = require("path");

module.exports = function(app) {
    
    // GET route for Survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // Default catch-all route which leads to Home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};