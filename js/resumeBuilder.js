
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Wannabe Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var bio = {
  "name": "Reno Provine",
  "role": "Web Developer",
  "contacts": {
    "mobile": "815-556-9699",
    "email": "rprovine@gmail.com",
    "github": "rprovine",
    "twitter": "rprovine",
    "location": "Naperville, IL"
  },
  "welcomeMessage": "Hello there, my name is Reno Provine and this is my interactive resume project for the Udacity Front End Web Developer NanoDegree",
  "skills": ["Ability to adapt and change", "Very quick learner", "Turns ideas into reality", "Creator of opportunities"],
  "bioPic": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p320x320/10600529_10153233200214465_2898787965586255200_n.jpg?oh=cce0a24ee7f2c4179a2a42b785f7f6b9&oe=54B9F884&__gda__=1418127637_213b49796584faae6a78f16f003a5024"
}

bio.display = function () {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);

  var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").prepend(formattedBioPic);


};

var work = {
  "jobs": [
    {
      "employer": "GAN Conferencing",
      "title": "Chief Executive Officer",
      "dates": "2005 - Present",
      "location" : "Lemont, IL",
      "description": "Co-founder and Chief Executive Officer"
    },
    {
      "employer": "BTI Communications Group",
      "title": "Chief Operating Officer",
      "dates": "2005 - 2007",
      "location" : "Chicago, IL",
      "description": "COO for BTI and President for GAN"
    },
    {
      "employer": "Precision Response Corporation",
      "title": "PBX Engineer",
      "dates": "1998",
      "location" : "Ft. Lauderdale, FL",
      "description" : "Worked little."
    }

  ]
};

work.display = function () {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

var projects = {
  "projects": [
    {
      "title": "QuickVisuals Pro",
      "dates": "2014",
      "description": "We launched our first web application called QuickVisuals Pro utilizing Ruby and Rails.",
      "images": [
        "http://rprovine.wpengine.com/wp-content/uploads/2013/10/gan1-e1383748869242.png",
        "https://hrhq.squarespace.com/assets/images/logo@2x.png"
      ]
    }
  ]
}

projects.display = function () {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);

      }
    }
  }
};
var education = {
  "schools": [
    {
      "name": "Benedictine University",
      "location": "Lisle, IL, USA",
      "degree": "BA",
      "major": ["Management"]
    },
    {
      "name": "Benedictine University",
      "location": "Lisle, IL, USA",
      "degree": "MS",
      "major": ["Business Analytics"]
    }
  ],
  "online courses": [
    {
      "title": "Udacity Nanodegree Front End Web Developer",
      "school": "Udacity",
      "dates": 2014,
      "url": "http://www.udacity.com"
    }
  ]
};
education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var majors = education.schools[school].major;

      for (major in majors) {
        var currentMajor = majors[major];
        formattedMajor = HTMLschoolMajor.replace("%data%", currentMajor);
        $(".education-entry:last").append(formattedMajor);
    }
  }
}

$(document).click(function (loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }

  return locationArray;
}

function inName(name) {
  console.log(name);

  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() +
      name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);


$('#main').append(internationalizeButton);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

