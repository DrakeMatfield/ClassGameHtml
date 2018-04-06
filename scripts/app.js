/////////////////var studentProfile = new Profile("drakematfield");

/**
 * When the JSON body is fully recieved the 
 * the "end" event is triggered and the full body
 * is given to the handler or callback
 **/
//////////////////////studentProfile.on("end", Display_Results);

function Display_Results(readableData) {
    console.log(readableData);
};


function Display_error(error) {
    console.log(error.message);
};


/**
 * If a parsing, network or HTTP error occurs an
 * error object is passed in to the handler or callback
 **/
//////////////////////////////////////studentProfile.on("error", console.error);

//const http = require('http');
//const hostname = '127.0.0.1';
//const port = 1331;


//http.createServer(function (request, response) {
//response.writeHead(200, {'Content-Type': 'text/plain'});  
//  response.end('Hello World!\n');

//}).listen(port, hostname);

//  console.log(`Server running at http://${hostname}:${port}/`);
// --- var Profile = require("../scripts/xml_http_profile.js");


// 1 user enter a username of in on in the treehouse.
// checked


// 2 after clicking the enter the person profile is looked up..

function goto_UserProfile(elementId) {

var username = document.getElementById(elementId).value;
    // window.location.assign("profile.html")
    var studentProfile = new Profile(username);
    studentProfile.on("end", Display_Results);
    studentProfile.on("error", Display_error);


}

// 3 if username exist 

// 4 if person doenst exit error message is shown.
// 4
// 5
// 6
// 7
// 8
// 9
