/////////////////var studentProfile = new Profile("drakematfield");

/**
 * When the JSON body is fully recieved the 
 * the "end" event is triggered and the full body
 * is given to the handler or callback
 **/
//////////////////////studentProfile.on("end", Display_Results);

function Display_Results(readableData) {
  console.dir(readableData);

  var values = {
    NAME: readableData.name,
    AVARTAR_URL: readableData.gravatar_url,
    USERNAME: readableData.profile_name,
    BADGES: readableData.badges.length,
    JAVASCRIPT_POINTS: readableData.points.JavaScript
  }
  console.dir(values);

  var profileString = "<div id=\"profile\" class=\"card\"> \
    <img src=\"{{AVARTAR_URL}}\" alt=\"Avatar\" id=\"avatar\"> \
    <p><span>{{USERNAME}}</span></p> \
    <ul> \
        <li><span>{{BADGES}}</span> Badges earned</li> \
        <li><span>{{JAVASCRIPT_POINTS}}</span> JavaScript points</li> \
        <li><a href=\"index.html\">search again</a></li> \
    </ul> \
    </div>";
  console.dir(profileString);
  console.log(profileString);
  document.getElementById('search_Display').innerHTML = mergeValues(values, profileString);
 document.getElementById('home_Display').style = "display: none";
};

function mergeValues(values, content) {
  for (var key in values) {
    content = content.replace("{{" + key + "}}", values[key]);
  }
  return content;
};

function Display_error(error) {
  console.error(error.message);
  var values = {ERROR_MESSAGE: error.message}  
  var errorString = "<div id=\"error\">{{ERROR_MESSAGE}} (Not Found)</div>";
  document.getElementById('error_Display').innerHTML = mergeValues(values, errorString);

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

function goto_UserProfile(elementId) {
  var username = document.getElementById(elementId).value;
  // window.location.assign("profile.html")
  var studentProfile = new Profile(username);
  studentProfile.on("end", Display_Results);
  studentProfile.on("error", Display_error);
}

var team_members_username =["drakematfield", "ammaarah", "timhargrow", "merjamirage"];
var profiles = [];


function Get_UsersProfile(usernames) {
  
  for(var username in usernames)
  {
  // window.location.assign("profile.html")
  var studentProfile = new Profile(usernames[username]);
  studentProfile.on('end', function(profile){
  console.dir(profile);
   profiles.push(profile);
  display_Profile_list([profile]);
  
  
  });
  
  studentProfile.on('error', Display_error);
  }
};

function display_Profile_list(profiles)
{
var profileString = document.getElementById('search_Display').innerHTML;
  for(var key in profiles)
  {
let user = profiles[key];

var values = {
    NAME: user.name,
    AVARTAR_URL: user.gravatar_url,
    USERNAME: user.profile_name,
    BADGES: user.badges.length,
    JAVASCRIPT_POINTS: user.points.JavaScript
  }
    profileString += "<dir class=\"card profiles\"> \
    <img src=\"{{AVARTAR_URL}}\" alt=\"Avatar\" id=\"avatar\"> \
    <p><span>{{USERNAME}}</span></p> \
    <ul> \
        <li><span>{{BADGES}}</span> Badges earned</li> \
        <li><span>{{JAVASCRIPT_POINTS}}</span> JavaScript points</li> \
        <li><a href=\"index.html\">search again</a></li> \
    </ul> \
    </dir>";
     
  }

document.getElementById('search_Display').innerHTML = mergeValues(values, profileString);
 document.getElementById('home_Display').style = "display: none";

};

Get_UsersProfile(team_members_username);
//Display_Profile_list(profiles);



