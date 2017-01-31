Template.Reading.onCreated(function () {
	var self= this;
	self.autorun(function() {
    self.subscribe('readings');
    self.subscribe('files.images.all');
	});
});


Template.Reading.rendered = function () {
 if(!this._rendered) {
      this._rendered = true;
      $("#reading").addClass("li-selected");
      $("#reading").siblings().removeClass("li-selected");
    }
};

Template.Reading.helpers({
	
	readings: () => {

		var readings = Readings.find({});
		var a = []

		readings.forEach(function (reading, i) {

			a[i] = {
				category: reading.category,
				readings: [reading]
			};

		});

		var a2 = []

		var result = a.filter(function (current, i, arr) {
			// console.log(current.category);
			// // arr.forEach(function (item, i) {
			// // 	console.log(item);
			// // })
		  return current.category === arr[i].category;
		});


	}
	
});