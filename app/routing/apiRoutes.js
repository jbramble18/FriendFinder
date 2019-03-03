var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        var userScores = userData.scores;

        var bestMatch = {
            name: "",
            photo: "",
            difference: 10000
        };

        for (var i = 0; i < friends.length; i++) {

            var diff = 0;

            for (var j = 0; j < userScores.length; j++) {

                diff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
            }    
                if (diff < bestMatch.difference) {
                    // console.log("Closet match found = " + diff);
                    // console.log("Friend Name is " + friends[i].name);
                    // console.log("Friend image = " + friends[i].photo);

                    bestMatch.difference = diff;
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;

                }
            


            // console.log("bestMatch" + bestMatch.name);
            // console.log("bestMatch.photo: " + bestMatch.photo);


        }

        friends.push(userData);
        res.json(bestMatch);

    });

};