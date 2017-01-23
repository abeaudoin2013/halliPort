Meteor.subscribe('projects');
Meteor.subscribe('files.images.all');

Template.Projects.helpers({
	projects: () => {
		return Projects.find({});
	}
});