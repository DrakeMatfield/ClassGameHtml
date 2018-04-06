var studentProfile = new Profile("drakematfield");

/**
* When the JSON body is fully recieved the 
* the "end" event is triggered and the full body
* is given to the handler or callback
**/
studentProfile.on("end", Display_Results);

function Display_Results(readableData) 
{
    console.log(readableData);
};

/**
* If a parsing, network or HTTP error occurs an
* error object is passed in to the handler or callback
**/
studentProfile.on("error", console.error);

//const http = require('http');
//const hostname = '127.0.0.1';
//const port = 1331;


//http.createServer(function (request, response) {
//response.writeHead(200, {'Content-Type': 'text/plain'});  
//  response.end('Hello World!\n');

//}).listen(port, hostname);

//  console.log(`Server running at http://${hostname}:${port}/`);
// --- var Profile = require("../scripts/xml_http_profile.js");


