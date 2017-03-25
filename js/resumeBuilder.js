/*
This is empty on purpose! Your code to build the resume will go here.
 */

 
 
 var bio ={
	name:"omar alanazi",
	role:"web developer",
	contacts :["0502977008","alanazi.omar@gmail.com","alanaziomar","Riyadh, Saudi Arabia"],
	welcomeMessage:"Welcome to my Resume",
	skills:["Good communication","Self-management"],
	biopic:"images/197x148.gif",
	display:function(){
		
		var role = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(role)
		var headerName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(headerName);


		var mob = HTMLmobile.replace("%data%", bio.contacts[0]);
		$("#topContacts").append(mob);
		var ema = HTMLemail.replace("%data%", bio.contacts[1]);
		$("#topContacts").append(ema);
		var git = HTMLgithub.replace("%data%", bio.contacts[2]);
		$("#topContacts").append(git);
		var loc = HTMLlocation.replace("%data%", bio.contacts[3]);
		$("#topContacts").append(loc);

		var mob = HTMLmobile.replace("%data%", bio.contacts[0]);
		$("#footerContacts").append(mob);
		var ema = HTMLemail.replace("%data%", bio.contacts[1]);
		$("#footerContacts").append(ema);
		var git = HTMLgithub.replace("%data%", bio.contacts[2]);
		$("#footerContacts").append(git);
		var loc = HTMLlocation.replace("%data%", bio.contacts[3]);
		$("#footerContacts").append(loc);
		
		var Welcome =  HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#").prepend(Welcome);
	
		
		var skills1 = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills-h3").append(skills1);
		var skills2 = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills-h3").append(skills2);

			var biopi =  HTMLbioPic.replace("%data%", bio.biopic);
		$("#skills-h3").prepend(biopi);


	}
};
bio.display();
var work ={
	jobs:["kafa'at","developer","Riyadh, Saudi Arabia","april 2016","Test own developed web services (WS) to ensure WS reliability"],
	display:function(){
		

		var emp = HTMLworkStart.replace("%data%", work.jobs);
		$("#workExperience").append(emp);
		var empk = HTMLworkEmployer.replace("%data%", work.jobs[0]);
		$("#workExperience").append(empk);
		var empt = HTMLworkTitle.replace("%data%", work.jobs[1]);
		$("#workExperience").append(empt);
		var empd = HTMLworkDates.replace("%data%", work.jobs[3]);
		$("#workExperience").append(empd);
		var emploc = HTMLworkLocation.replace("%data%", work.jobs[2]);
		$("#workExperience").append(emploc);
		var empdes = HTMLworkDescription.replace("%data%", work.jobs[4]);
		$("#workExperience").append(empdes);

		

	}
};
work.display();

var education ={
	schools:["Institute of Public Administration","Riyadh, Saudi Arabia","Diploma","Computer Programming","2011","https://www.ipa.edu.sa"],
	onlineCourses:["Front End","Udacity","2017","htts://www.Udacity.com"],
	display:function(){

		var sch = HTMLschoolStart.replace("%data%", education.schools);
		$("#education").append(sch);

		var schn = HTMLschoolName.replace("%data%", education.schools[0]);
		$("#education").append(schn);
		var schd = HTMLschoolDegree.replace("%data%", education.schools[2]);
		$("#education").append(schd);
		var schdate = HTMLschoolDates.replace("%data%", education.schools[4]);
		$("#education").append(schdate);
		var schloc = HTMLschoolLocation.replace("%data%", education.schools[1]);
		$("#education").append(schloc);
		var schmaj = HTMLschoolMajor.replace("%data%", education.schools[3]);
		$("#education").append(schmaj);
		
		var onlc = HTMLonlineClasses.replace("%data%", education.onlineCourses);
		$("#education").append(onlc);

		var onlt = HTMLonlineTitle.replace("%data%", education.onlineCourses[0]);
		$("#education").append(onlt);
		var onls = HTMLonlineSchool.replace("%data%", education.onlineCourses[1]);
		$("#education").append(onls);
		var onld = HTMLonlineDates.replace("%data%", education.onlineCourses[2]);
		$("#education").append(onld);
		var onlu = HTMLonlineURL.replace("%data%", education.onlineCourses[3]);
		$("#education").append(onlu);
		


	}
};
education.display();

var projects={
	proj:["Resume","2017","bulid my resume","images/fry.jpg"],
	display:function(){
		
		var port = HTMLprojectStart.replace("%data%", projects.proj);
		$("#projects").append(port);
		var pord = HTMLprojectDates.replace("%data%", projects.proj[1]);
		$("#projects").append(pord);
		var pordes = HTMLprojectDescription.replace("%data%", projects.proj[2]);
		$("#projects").append(pordes);

	}
};
projects.display();


var map = googleMap.replace( "<div id=”mapDiv”>");
	$("#mapDiv").append(map);