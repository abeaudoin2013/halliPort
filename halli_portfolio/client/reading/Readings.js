Template.Readings.onCreated(function () {
	var self= this;
	self.autorun(function() {
    self.subscribe('readings');
    self.subscribe('files.images.all');
	});
});


Template.Readings.rendered = function () {
 if(!this._rendered) {
      this._rendered = true;
      $("#reading").addClass("li-selected");
      $("#reading").closest("a").siblings().find("li").removeClass("li-selected");
    }
};

Template.Readings.helpers({
	
	readings: () => {

		var readings = Readings.find({});
		var a = [];
		var b = [];

		readings.forEach(function (reading, i) {

			a[i] = [reading.category, reading];
			b[i] = reading.category;
		});

		var reducedReadings = a.reduce(function (categories, line, i) {

			//THIS WORKS if output is obj
			// reuse existing array if there is one or make new one
			categories[line[0]] = categories[line[0]] || [];
			categories[line[0]].push({
				readings: line[1]
			});

			return categories;

		}, {});
		var names = Object.getOwnPropertyNames(reducedReadings).sort();
		reducedReadings.names = names;
		return reducedReadings;

	},

	pullReadings: (obj, name) => {
		return obj[name];
	},

	image: function () {
		var id = this.readings.pictures;
		return Images.findOne({_id: id});
	}
	
});