var bio = {
    "name": "Vishesh Banga",
    "role": "Web Developer",
    "contacts": {
        "mobile": "7696356513",
        "email": "visheshbanga@gmail.com",
        "github": "visheshbanga",
        "location": "Panchkula, India"
    },
    "welcomeMessage": "An ambitious problem solver who would like to join a team of like-minded developers.",
    "skills": ["C", "C++", "Java", "HTML", "Javascript"],
    "biopic": "images/vishesh.jpg",
};

var work = {
    "jobs": [{
            "employer": "Udacity",
            "title": "Full Stack Web Developer",
            "location": "Chandigarh",
            "dates": "in progress",
            "description": "Web Developer"
        }]
};

var projects = {
    "projects": [{
            "title": "Multi User Blog",
            "dates": "February, 2017",
            "description": "This is a web page being hosted on Google App Engine where users can sign in and post blog posts as well as 'Like' and 'Comment' on other posts made on the blog.",
            "url": "https://github.com/visheshbanga/Multi-User-Blog",
            "images": []
        },
        {
            "title": "Image Compression and Decompression System",
            "dates": "February, 2016 – May, 2016",
            "description": "This is a desktop application to compress and decompress the image of any size, which provides the way to manage the size according to the need.",
            "url": "https://github.com/visheshbanga/ImageCompression",
            "images": ["images/project_1.jpg","images/project_2.jpg"]
        }
    ]
};

var education = {
    "schools": [{
            "name": "Chitkara University",
            "location": "Chandigarh",
            "degree": "B.E",
            "majors": ["CSE"],
            "dates": "2014-2018",
            "url": "http://www.chitkara.edu.in/"
        },
        {
            "name": "D.C. Model Sr. Sec. School",
            "location": "Panchkula",
            "degree": "Class XII",
            "majors": ["Non Medical"],
            "dates": "2013-2014",
            "url": "http://dcmspkl.ztc.in/"
        }
    ],
    "onlineCourses": [{
            "title": "Full Stack Web Development Nanodegree",
            "school": "Udacity",
            "dates": "January,2017 - May,2017",
            "url": "https://in.udacity.com/course/full-stack-web-developer-nanodegree--nd004/"
        }
        /*,
        {
            "title": "Front End Web Development Nanodegree",
            "school": "Udacity",
            "dates": "June,2017 - present",
            "url": "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
        }*/
    ]
};


// Display bio in resume
bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var biopic = HTMLbioPic.replace("%data%",bio.biopic);
    var welcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var email = HTMLemail.replace("%data%",bio.contacts.email);
    var github = HTMLgithub.replace("%data%",bio.contacts.github);
    var locations = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#header").prepend(formattedName,formattedRole);
    $("#header").append(welcomeMessage,biopic);

    $("#topContacts, #footerContacts").append(mobile,email,github,locations);

    // Add skills to resume
    if(bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        for(i = 0; i < bio.skills.length; i++){
            var skill = HTMLskills.replace("%data%",bio.skills[i]);
            $("#skills").append(skill);
        }
    }
};

// Display work section in resume
work.display = function(){
    for(var i = 0; i < work.jobs.length; i++){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
        formattedEmployer += HTMLworkTitle.replace("%data%",work.jobs[i].title);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

        $(".work-entry:last").append(formattedEmployer,formattedDates,formattedLocation,formattedDescription);
    }
};

// Display projects in resume
projects.display = function(){
    for(var i = 0; i < projects.projects.length; i++){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = $(HTMLprojectTitle);
        formattedTitle.text(projects.projects[i].title);
        formattedTitle.attr('href',projects.projects[i].url);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);

        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

        if(projects.projects[i].images.length > 0){
           for(var j = 0; j < projects.projects[i].images.length; j++){
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

// Display Education section in resume
education.display = function(){
    // Display schools
    var i = 0;
    var formattedDates = "";
    for(i = 0; i < education.schools.length; i++){
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
        formattedName = formattedName.replace('#',education.schools[i].url);
        formattedName += HTMLschoolDegree.replace("%data%",education.schools[i].degree);

        formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);

        $(".education-entry:last").append(formattedName,formattedDates,formattedLocation);

        for(var j = 0; j < education.schools[i].majors.length; j++){
            var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
            $(".education-entry:last").append(formattedMajor);
        }
    }
    // Display online courses
    $("#education").append(HTMLonlineClasses);
    for(i = 0; i < education.onlineCourses.length; i++){
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
        formattedTitle = formattedTitle.replace('#',education.onlineCourses[i].url);
        formattedTitle += HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);

        formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedTitle,formattedDates,formattedUrl);
    }
};

// Display map
$("#mapDiv").append(googleMap);

// Internationalize Name
$("#main").append(internationalizeButton);

function inName(name){
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

bio.display();
work.display();
projects.display();
education.display();