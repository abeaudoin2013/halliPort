Meteor.subscribe('projects');
Meteor.subscribe('files.images.all');

Template.Projects.rendered = function () {
 if(!this._rendered) {
      this._rendered = true;
      $("#projects").addClass("li-selected");
      $("#projects").siblings().removeClass("li-selected");
    }
};

var projectYears = [];

Template.Projects.helpers({
	// projects: () => {
	// 	return Projects.find({}, {sort: {projectDate: 1}});
	// },
	projects: () => {

		var startDate = moment("2010-01-01");
		var startDateClone = startDate.clone();
		var currentTime = moment();
		var years = currentTime.year() - startDate.year();

		for (var i = years; i >= 0; i--) {

			projectYears[years - i] = {}
					
		  var currentTimeClone = currentTime.clone();

			var year = currentTimeClone.subtract(i, 'years');
			var yearClone = year.clone();

			var projects = Projects.find({projectDate: {"$gte": yearClone._d, "$lt": yearClone.subtract(1, 'years')._d}});

			projectYears[years - i].year = year.format("YYYY");
			projectYears[years - i].projects = projects;

			// now all you need to do is save the collection to the coresponding range

		}

		return projectYears;

		
	}
});

