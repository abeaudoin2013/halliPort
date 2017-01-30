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
			var yearClone2 = year.clone();

			// find projects between start of current year and end of year

			var projects = Projects.find({
				projectDate: {
					"$gte": yearClone.startOf('year').toDate(),
					"$lt": yearClone2.add(1, 'years').startOf('year').toDate()
				}
			});

			projectYears[years - i].year = year.format("YYYY");
			projectYears[years - i].projects = projects;

			// now all you need to do is save the collection to the coresponding range

		}

		return projectYears;

		
	}

	// test: () => {
	// 	var m = moment("2016-01-01");
	// 	var m2 = m.clone();
	// 	var m3 = m.clone();

 //    var e = m2.toDate();
 //    var s = m3.subtract(1, 'year').toDate();
 //    console.log(e)
 //    console.log(s)
	// 	var projects = Projects.find({
	// 		"projectDate": {
	// 			"$gte": s,
	// 			"$lt": e
	// 		}
	// 	});
	// 	// var projects = Projects.find({});
	// 	return projects;
	// }
});

