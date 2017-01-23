Meteor.publish('projects', function () {
	return Projects.find({});
});
Meteor.publish('files.images.all', function () {
  return Images.collection.find({});
});