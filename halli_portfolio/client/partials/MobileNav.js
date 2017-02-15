Template.MobileNav.events({
	"click #close": function () {
		$(".mn-container").animate({left: "-100%"}, 250);
	},
	"click .li": function () {
		$(".mn-container").animate({left: "-100%"}, 250);
	},
	"click #logout": function () {
		AccountsTemplates.logout();
		$(".mn-container").animate({left: "-100%"}, 250);
	}
});

Template.MobileNav.helpers({
	admin: function () {
		return Roles.userIsInRole(Meteor.userId(), 'admin');
	}
});