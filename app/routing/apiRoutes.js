var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req,res) {

        var bestMatch = {
            name: "",
            photo: "",
            difference: 1000
        };

        var userData= req.body;
        var userScores = userData.scores;
        var userName = userData.name;
        var userPhoto = userData.photo;

        var totalDifference = 0;
       
        for (var i = 0; i < friends.length -1; i++) {
            console.log(friends[i].name);
           
            totalDifference = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= bestMatch.difference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.difference = totalDifference;

                    console.log("bestMatch.name: " + bestMatch.name);
                    console.log("bestMatch.difference: " + bestMatch.difference );
                }
            }
            

            console.log("bestMatch" + bestMatch.name);
            console.log("bestMatch.photo: " + bestMatch.photo);


        }

         friends.push(userData);
        res.json(bestMatch);

    });

};