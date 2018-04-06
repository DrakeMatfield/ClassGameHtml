// JScript File

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

////const myEmitter = {}
//eventify(this)

//    //EventEmitter.call(this);

//    var profileEmitter = this;

//    //Connect to the API URL (https://teamtreehouse.com/username.json)
//    //var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
//    //var str = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='#ZIPCODE')&format=json";
//    var url = "https://teamtreehouse.com/" + username + ".json";
//    var xmlhttp = new XMLHttpRequest();
//    
//    xmlhttp.open("GET", url, true);
//    xmlhttp.send();
// 

//  xmlhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//    try {
//    //Parse the data
//    var profile = JSON.parse(this.responseText);
//    profileEmitter.emit("end", profile);
//    } catch (error) {
//    profileEmitter.emit("error", error);
//    }
//    }
//    };


//        if (response.statusCode !== 200) {
//            request.abort();
//            //Status Code Error
//            profileEmitter.emit("error", new Error("There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"));
//        }   
}

//util.inherits( Profile, EventEmitter );

module.exports = Profile;


 // <script src="https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='64129')&format=json&callback=callbackFunction"></script>


//function Analyzed_Results(temperature) {
//  var text;

//  if (Number(temperature) < 40) {
//    text = "You should wear a coat; because it's " + temperature + " degress right now.";
//  }
//  else if (Number(temperature) < 80) {
//    text = "You should wear a jacket; because it's " + temperature + " degress right now.";
//  }
//  else {
//    text = "You should wear short; because it's " + temperature + " degress right now.";
//  }
//  return text;
//}

//// Just in case I need to set it to Synchronous
////https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
//function On_Submit(element_id) {
//  var zipcode = document.getElementById(element_id).value;
//  var str = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='#ZIPCODE')&format=json";
//  var url = str.replace('#ZIPCODE', zipcode);

//  var xmlhttp = new XMLHttpRequest();

//  xmlhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//      callbackFunction(this.responseText);
//    }
//  };
//  xmlhttp.open("GET", url, true);
//  xmlhttp.send();
//}

//var callbackFunction = function(data) {
//  var readableData = JSON.parse(data);
//  Display_Results('id_results', readableData);
//}

//function on_enter_pressed(event) {
//  event.preventDefault();
//  if (event.keyCode === 13) {
//    On_Submit(event.target.id);
//  }
//}

//function reminder(theBody, theIcon, theTitle, theTag, theDate, theTime) {
//  this.body = theBody;
//  this.icon_pic = theIcon;
//  this.title = theTitle;
//  this.tag = theTag;
//  this.date_set = theDate;
//  this.time_set = theTime;
//}﻿﻿﻿

//reminder.prototype.Display_Notification = function() {
//  spawnNotification(this.body, this.icon_pic, this.title, this.tag);
//}


//function spawnNotification(theBody, theIcon, theTitle, theTag) {
//  var options = {
//    body: theBody,
//    icon: theIcon,
//    tag: theTag
//  }

//  var n = new Notification(theTitle, options);

//  setTimeout(n.close.bind(n), 5000);
//  //setTimeout(function() {    alert(theTitle);  }, 3000);
//}

//function On_Notify(element_id) {
//  var element = document.getElementById(element_id);

//  if (element.checked == true) {
//    //spawnNotification("Hi", "images/cloud.jpg", "Checking that Notification works!", "Weather_API");
//    if (!notifyMe()) {
//      element.checked = false;
//    }
//  }
//  else {
//    spawnNotification("Notification is now turned off", "images/cloud.jpg", "Weather API Notification", "Weather_API_Started");
//  }
//}

//var background_Worker;

//function startWorker() {
//  if (typeof(Worker) !== "undefined") {
//    if (typeof(background_Worker) == "undefined") {
//      background_Worker = new Worker("JScriptWorker.js");
//    }
//    background_Worker.onmessage = first_run(event);
//  }
//  else {
//    document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
//  }
//}

//function stopWorker() {
//  background_Worker.terminate();
//  background_Worker = undefined;
//}

//function on_SendMessage() {
//  var r = new reminder("Hi", "images/cloud.jpg", "Checking that Notification works!", "Weather_API", Date.now(), "3:00 pm");
//  var myJSON = JSON.stringify(r);
//  background_Worker.postMessage(myJSON);
//  console.log(r);
//  console.log(myJSON);
//}﻿﻿﻿

//function first_run(event) {

//  //spawnNotification("Hi", "images/cloud.jpg", "Checking that Notification works!", "Weather_API");
//  document.getElementById("result").innerHTML = event.data;
//};

//function notifyMe() {

//  var successful;
//  // Let's check if the browser supports notifications
//  if (!("Notification" in window)) {
//    alert("This browser does not support system notifications");

//    successful = false;
//  }

//  // Let's check whether notification permissions have already been granted
//  else if (Notification.permission === "granted") {
//    // If it's okay let's create a notification
//    spawnNotification("Notification is now Enabled", "images/cloud.jpg", "Weather API Notification", "Weather_API_Started");
//    successful = true;

//  }

//  // Otherwise, we need to ask the user for permission
//  else if (Notification.permission !== 'denied') {
//    Notification.requestPermission(function(permission) {
//      //       Notification.permission = permission;
//      // If the user accepts, let's create a notification
//      if (permission === "granted") {
//        spawnNotification("Notification is now Enabled to be turned on.", "images/cloud.jpg", "Weather API Notification", "Weather_API_Started");
//        successful = true;
//      }
//      else { successful = false; }
//    });
//  }
//  else {
//    successful = false;
//  }

//  // Finally, if the user has denied notifications and you 
//  // want to be respectful there is no need to bother them any more.

//  Notification.requestPermission().then(function(result) {
//    console.log(result);
//  });

//  return successful;
//}﻿﻿﻿﻿﻿
//﻿ 
