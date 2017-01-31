Meteor.publish('projects', function () {
	return Projects.find({});
});
Meteor.publish('readings', function () {
	return Readings.find({});
});
Meteor.publish('files.images.all', function () {
  return Images.collection.find({});
});

Meteor.publish('project', function (id) {
	check(id, String);
	return Projects.find({});
});