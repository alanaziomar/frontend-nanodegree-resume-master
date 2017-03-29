/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio ={
 	"name":"Omar alanazi",
 	"role":"Web developer",
 	"contacts":{
 		"mobile":"0502977008",
 		"email":"alanazi.omar@gmail.com",
 		"github":"alanaziomar",
 		"location":"Riyadh, Saudi Arabia"

 	},
 	"welcomeMessage":"Welcome to my Resume",
 	"skills":["Good communication","Self-management","Self-learnning"],
 	"biopic":"images/197x148.gif",
 	"display":function(){
 		var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
 		var formattedRole = HTMLheaderRole.replace("%data%",bio["role"]);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

			var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
			var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
			var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
			var formattedliving = HTMLlocation.replace("%data%",bio.contacts.location);

			$("#topContacts").append(formattedMobile);
			$("#topContacts").append(formattedemail);
			$("#topContacts").append(formattedgithub);
			$("#topContacts").append(formattedliving);


			$("#footerContacts").append(formattedMobile);
			$("#footerContacts").append(formattedemail);
			$("#footerContacts").append(formattedgithub);
			$("#footerContacts").append(formattedliving);
		
		
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio["welcomeMessage"]);
		$("#header").append(formattedWelcomeMessage);
		var formattedBioPic = HTMLbioPic.replace("%data%",bio["biopic"]);
		$("#header").append(formattedBioPic);
		
		if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
		for(skill in bio.skills){
			
			var formattedskill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedskill);
			}
		}
 	}
 };
 
 var education ={
 	"schools":[{
 		"name":"Institute of Public Administration",
 		"location":"Riyadh, Saudi Arabia",
 		"degree":"Diploma",
 		"majors":["Computer Programming"],
 		"dates":"2011",
 		"url":"https://www.ipa.edu.sa"
 	}],
 	"onlineCourses":[{
 		"title":"Front End",
 		"school":"Udacity",
 		"dates":"2017",
 		"url":"https://www.Udacity.com"
 	}],
 	"display":function(){

 		education.schools.forEach(function(schools){

			var formattedName = HTMLschoolName.replace("%data%",schools.name);
			var formattedDegree = HTMLschoolDegree.replace("%data%",schools.degree);
			var formattedNameDegrre = formattedName + formattedDegree;
			var formattedLocation = HTMLschoolLocation.replace("%data%",schools.location);
			var formattedMajors = HTMLschoolMajor.replace("%data%",schools.majors);
			var formattedDates = HTMLschoolDates.replace("%data%",schools.dates);
	
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedNameDegrre);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajors);
			$(".education-entry:last").append(formattedDates);
		});

		education.onlineCourses.forEach(function(onlineCourses){

			var formattedOnlineTitel = HTMLonlineTitle.replace("%data%",onlineCourses.title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",onlineCourses.school);
			var formattedOnlineTitleSchool = formattedOnlineTitel + formattedOnlineSchool;
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",onlineCourses.dates);
			var formattedOnlineUrl = HTMLonlineURL.replace("%data%",onlineCourses.url);
	
			$(".education-entry:last").append(HTMLonlineClasses);
			$(".education-entry:last").append(formattedOnlineTitleSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineUrl);
			
		});

 	}
 };
 
var work ={
	"jobs":[{
		"employer":"kafa'at",
		"title":"backend developer",
		"location":"Riyadh, Saudi Arabia",
		"dates":"Apr 2016",
		"description":"develop back end using java"
	},{
		"employer":"elm",
		"title":".Net developer",
		"location":"Riyadh, Saudi Arabia",
		"dates":"Apr 2013",
		"description":"working with asp.net using C#"
	}],
	"display":function(){
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployee = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitel = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployeeTitel = formattedEmployee + formattedTitel;
			var formattedlocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			var formatteddates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formatteddescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);



			$(".work-entry:last").append(formattedEmployeeTitel);
			$(".work-entry:last").append(formattedlocation);
			$(".work-entry:last").append(formatteddates);
			$(".work-entry:last").append(formatteddescription);
		}
	}
};

var projects ={
	"projects":[{
		"title":"Resume",
		"dates":"2017",
		"description":"build my resume using HTML, CSS ,and Javascript",
		"images":["images/197x148.gif","images/197x148.gif"]
	}],
	"display":function(){

			projects.projects.forEach(function(projects){
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.description);
			var formattedProjectImage0 = HTMLprojectImage.replace("%data%", projects.images[0]);
			var formattedProjectImage1 = HTMLprojectImage.replace("%data%", projects.images[1]);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(formattedProjectImage0);
	 		$(".project-entry:last").append(formattedProjectImage1);
		}) ;
	}
};

$("#mapDiv").append(googleMap);



bio.display();
education.display();
projects.display();
work.display();