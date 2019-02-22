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

        // For loop to run through each friend's data for possbile matches
        for (let f = 0; f < friends.length; f++) {
            totalDifference = 0;
              
            // For loop to run through all the scores for each possible friend
            for (let s = 0; s < friends[f].scores.length; s++) {
                    totalDifference += Math.abs(parseInt(userScores[s]) - parseInt(friends[f].scores[s]));

                // If the total number of differences is less than the friendsNow differences, then set the bestMatch to the friends data.
                if (totalDifference <= bestMatch.friendDelta) {
                    bestMatch.name = friends[f].name;
                    bestMatch.photo = friends[f].photo;
                    bestMatch.friendDelta = totalDifference;
                }
            }
        }
        // After the check, store and save user's data to the friends data
        friends.push(userData);
        
        // The HTML file will use the JSON data below
        res.json(bestMatch);
    });
};