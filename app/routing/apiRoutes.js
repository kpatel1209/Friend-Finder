// GET route "/api/friends" = displays JSON for possible friends
// POST route "/api/friends" = handles incoming survey results; also used to handle compatibility logic

const friends = require("../data/friends");

module.exports = function(app) {

    // GET route to display JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // POST route to handle incoming survery results and compatibility logic
    app.post("/api/friends", function(req, res) {

        // This object will store the best possible friend match and will update after each loop through
        let bestMatch = {
            name: "",
            photo: "",
            friendDelta: 100
        };

        
    });









};