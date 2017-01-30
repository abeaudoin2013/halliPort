Template.Timeline.onCreated(function () {
	var self= this;
	self.autorun(function() {
    self.subscribe('projects');
    self.subscribe('files.images.all');
	});
});

var previousDate = "";

Template.Timeline.helpers({
	projects: function () {
		var projects = Projects.find({});
		var projectsObj = {
			ten: 0,
			eleven: 0,
			twelve: 0,
			thirteen: 0,
			fourteen: 0,
			fifteen: 0,
			sixteen: 0,
			seventeen: 0
		};

		projects.forEach(function(project, i) {
			var date = moment(project.projectDate).format("YYYY");
			
			if (date === "2010") {
				projectsObj.ten = projectsObj.ten + 1;
			} else if (date === "2011") {
				projectsObj.eleven = projectsObj.eleven + 1;
			} else if (date === "2012") {
				projectsObj.twelve = projectsObj.twelve + 1;
			} else if (date === "2013") {
				projectsObj.thirteen = projectsObj.thirteen + 1;
			} else if (date === "2014") {
				projectsObj.fourteen = projectsObj.fourteen + 1;
			} else if (date === "2015") {
				projectsObj.fifteen = projectsObj.fifteen + 1;
			} else if (date === "2016") {
				projectsObj.sixteen = projectsObj.sixteen + 1;
			} else if (date === "2017") {
				projectsObj.seventeen = projectsObj.seventeen + 1;
			}

		});
		return projectsObj;
	},
	number: (num) => {
		var arr = [];
		arr.length = num;
		arr.fill("");
		return arr;
	}
});

Template.Timeline.events({
  "click .timeline-year-container": function (evt) {
  	var id = $(evt.target).closest(".timeline-year-container").attr('id');
  	$("#main").animate({
  		scrollTop: $("#projects-" + id).offset().top
  	}, 250)
  }
});




