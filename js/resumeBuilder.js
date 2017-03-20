var name = "Nikola 	Razmovski";

var formmatedName = HTMLheaderName.replace ("%data%" , name);

var role = "Programmer WANNABE !!!";

var formmatedRole = HTMLheaderRole.replace ("%data%" , role);


$("#header").append(formmatedName);
$("#header").append(formmatedRole);

var bio = {

	"name": "Nikola Razmovski",
	"role": "Programmer WANNABE !!!",
	"contacts": {

		"mobile" : "+38976790929",
		"email" : "razmovski.nikola96@hotmail.com",
		"github" : "nikolarazmovski",
		//"twitter" : none;
		"location" : "Bitola,Macedonia"
	},

	"welcomeMessage" : "WINTER IS COMIIIIIING !!!!",
	"skills" : [

		"Awsome athlete" , "Driving a car on two wheels" , "Can kick some serious ass!!!" , "Sexy motherfucker :P"

	],

	"schools" : [


			 {

					"school" : "Kliment Ohridski",
					"place" : "Bitola , Macedonia",
					"dates" : "2002/2003 - 2010/2011",
					"title" : "Elementary School Diploma"


			},
			{

					"school" : "Josip Broz Tito",
					"place" : "Bitola , Macedonia",
					"dates" : "2011/2012 - 2014/2015",
					"title" : "High School Diploma"


			}




	],

	"bioPic" : "images/Nick.jpg"
}





//CONTACTS -------^--------- uses "bio" object


var _mobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);

$("#header").append(_mobile);

var _email = HTMLemail.replace("%data%" , bio.contacts.email);

$("#header").append(_email);

var _github = HTMLgithub.replace("%data%" , bio.contacts.github);

$("#header").append(_github);

var _location = HTMLlocation.replace("%data%" , bio.contacts.location);

$("#header").append(_location);

$("#header").append(HTMLbreak);



//CONTACTS -------^---------








//PIC -------^------ uses "bio" object

var PIC = HTMLbioPic.replace("%data%" , bio.bioPic);

$("#header").append(PIC);

//PIC -------^------


$("#header").append(HTMLbreak);


//WELCOME MESSAGE --------^---------


var welcome = HTMLwelcomeMsg.replace("%data%" , bio.welcomeMessage);
$("#header").append(welcome);
	

//WELCOME MESSAGE --------^---------




//SKILS -----^------- uses "bio" object

if (bio.skills.length > 0 ){

	$("#header").append(HTMLskillsStart);
		for (var i = 0 ; i < bio.skills.length ; i++ ){

			var formmatedSkill = HTMLskills.replace("%data%" , bio.skills[i]);
			$("#skills").append(formmatedSkill);

		}

}

//SKILS -----^-------




//EDUCATION --------^------- uses "bio" object


for (var i = 0 ; i < bio.schools.length ; i++ ){

				$("#education").append(HTMLschoolStart);


				var _name = HTMLschoolName.replace ("%data%" , bio.schools[i].school);
				$(".education-entry:last").append(_name);
				var _title = HTMLschoolDegree.replace ("%data%" , bio.schools[i].title);
				$(".education-entry:last").append(_title);
				var _date = HTMLschoolDates.replace ("%data%" , bio.schools[i].dates);
				$(".education-entry:last").append(_date);
				var _location = HTMLschoolLocation.replace ("%data%" , bio.schools[i].place);
				$(".education-entry:last").append(_location);

		//HTMLschoolName HTMLschoolDegree  HTMLschoolDates HTMLschoolLocation


}


//EDUCATION --------^-------


var work = {


		"jobs" : [

		{

			
			"employer" : "Tank & Rast",
			"title" : "Cleaner",
			"dates" : "15/06/2016 - 15/09/2016",
			"description" : "Cleaning the dining area in the Gas Station Restaurant."



		},
		{


			"employer" : "Cermat",
			"title" : "Worker",
			"dates" : "30/06/2016 - 15/08/2016",
			"description" : "Making ice cream in the ICE CREAM Factory."


		},

		]


}

for (job in work.jobs){

	$("#workExperience").append(HTMLworkStart);

	var formmatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formmatedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

	var formmatedEmployerTitle = formmatedEmployer + formmatedTitle;

	$(".work-entry:last").append(formmatedEmployerTitle);


	var formmatedDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
	$(".work-entry:last").append(formmatedDates);

	//$("#header").append(HTMLbreak);


	var formmatedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
	$(".work-entry:last").append(formmatedDescription);



}


//PROJECT ---------^----------


var explanataion = HTMLprojectDescription.replace ("%data%" , "Ufortenately I haven't particitpated in any projects what so ever.:P");

$("#projects").append(explanataion);

//PROJECT ---------^----------





//ONLINE COURSES ---------^---------

var explanataion1 = HTMLonlineDescription.replace ("%data%" , "I didn't took online courses , sorry.");

$("#online").append(explanataion1);

//ONLINE COURSES ---------^---------










//CONTACTS 2-------^--------- uses "bio" object


var _mobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);

$("#lets-connect").append(_mobile);

var _email = HTMLemail.replace("%data%" , bio.contacts.email);

$("#lets-connect").append(_email);

var _github = HTMLgithub.replace("%data%" , bio.contacts.github);

$("#lets-connect").append(_github);

var _location = HTMLlocation.replace("%data%" , bio.contacts.location);

$("#lets-connect").append(_location);

$("#header").append(HTMLbreak);




//CONTACTS  2 -------^---------


//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!
//DODAJ I LOKACIJA KAJ RABOTNO MESTOOOOOOOOOOOOOO !!!!!!!!!!!