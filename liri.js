console.log('hello')
var env = require('dotenv').config()
var Twitter = require('twitter');
var Spotify = require('node-spotify-api')
var keys = require('./keys.js')
// var spotifyKey = new Spotify(keys.spotify);
var T = new Twitter(keys.twitter);
var fs = require("fs");




var params = {
    screen_name: "",
    // count: 2
}
T.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        console.log(tweets.length);

        console.log(tweets[0].created_at + " - " + tweets[0].text);
        for (let i = 0; i < tweets.length; i++) {
            console.log(tweets[i].created_at + " - " + tweets[i].text);
        }

    } else {
        console.log(error)
    }
});





/////Spotify API Call

var spotify = new Spotify({
    id: 'c8256d043cbe4233b241edb5e8f32880',
    secret: 'db4c9e28cef543e4b1f7b440600e70cc'
})

// var songName = "Happier"
// var spotifyParams = {
//     type: 'track',
//     q: "Happier"
// }
spotify
    .search({
        type: 'track',
        query: 'Happier',
        limit: 20
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    });

// function random() {
//     fs.readFile("random.txt", "utf8", function (error, data) {
//         if (error) {
//             return console.log(error);
//         }

//         var randomChoice = data.split(",");
//         console.log(randomChoice);
//         if (randomChoice[0] === "spotify-this-song") {
//             spotifyThis(randomChoice[1]);
//         }

//     })
// }
// random()
// spotifyThis()



///OMBD API Call

// var OMBD = require('OMBD')
// var request = require("request");

// // We then run the request module on a URL with a JSON
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function (error, response, body) {

//     // If there were no errors and the response code was 200 (i.e. the request was successful)...
//     if (!error && response.statusCode === 200) {

//         // Then we print out the imdbRating
//         console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//     }
// });