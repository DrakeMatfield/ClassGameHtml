// JScript File
//var eventify = require("./eventfy.js");
//var https = require("https");
//var http = require("http");
//var util = require("util");

/**
 * An EventEmitter to get a Treehouse students profile.
 * @param username
 * @constructor
 */
function Profile(username) {

  //const myEmitter = {}
  eventify(this)

  //    //EventEmitter.call(this);

      var profileEmitter = this;

  //Connect to the API URL (https://teamtreehouse.com/username.json)
  //var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
  //var str = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='#ZIPCODE')&format=json";
  var url = "https://teamtreehouse.com/" + username + ".json";
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET", url, true);
  xmlhttp.send();


xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        try {
            //Parse the data
            var profile = JSON.parse(this.responseText);
            profileEmitter.emit("end", profile);
        } 
        catch (error) {
            profileEmitter.emit("error", error);
        }
    }
    if (this.readyState == 4 && this.status >= 400 ) {
        var code = this.status;
        this.abort();// this line might not be needed.
        //Status Code Error
        profileEmitter.emit("error", new Error("There was an error getting the profile " + username + " for you. ( status code: " + code + ")"));
    }
};






}
