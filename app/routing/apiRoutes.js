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
            friendDelta: Infinity // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
        };

        let userData = req.body;
        let userScores = userData.scores;

        // Calculates the difference between user's score and each friend's score in the data set
        let totalDifference;

        // For loop to run through each friend's data to.
        for (let i = 0; i < friends.length; i++) {
            
        }


    });









};