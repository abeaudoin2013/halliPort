Template.Nav.events({
	"click #logout": function () {
		AccountsTemplates.logout();
	}
});
Template.Nav.helpers({
	admin: function () {
		return Roles.userIsInRole(Meteor.userId(), 'admin');
	}
});