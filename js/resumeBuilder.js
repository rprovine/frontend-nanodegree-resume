var name = "Reno Provine";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var bio = {
    "name" : "Reno Provine",
    "role" : "Web Developer",
    "contacts" : {
        "mobile": "815-556-9699",
        "email": "rprovine@gmail.com",
        "github": "rprovine",
        "twitter": "rprovine",
        "location": "Naperville"
    },
    "welcomeMessage" : "Hello there, I rule!",
    "skills" : ["awesomeness", "ruler of planet", "fantastic dude"],
    "bioPic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p320x320/10600529_10153233200214465_2898787965586255200_n.jpg?oh=cce0a24ee7f2c4179a2a42b785f7f6b9&oe=54B9F884&__gda__=1418127637_213b49796584faae6a78f16f003a5024"
}

var work = {};
work.position = "Chief Executive Officer";
work.employer = "New Company";
work.years = 3;
work.city = "Lemont";

var projects = {
    "projects": [
        {
            "title": "First Project",
            "dates": "2012",
            "description": "This was an awesome first project",
            "images": "picture link here"
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "Benedictine University",
            "city": "Lisle, IL, USA",
            "degree": "BA",
            "major": ["Management"]
        },
        {
            "name": "Benedictine University",
            "city": "Lisle, IL, USA",
            "degree": "MS",
            "major": ["Business Analytics"]
        }
    ]
};

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(work["position"]);
$("#main").append(education.name);
$("#main").append(projects.title);
