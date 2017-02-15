Template.NewProject.rendered = function () {
 if(!this._rendered) {
      this._rendered = true;
      $("#new-project").addClass("li-selected");
      $("#new-project").closest("a").siblings().find("li").removeClass("li-selected");
    }
};

Template.NewProject.helpers({
	admin: function() {
		return Roles.userIsInRole(Meteor.userId(), 'admin');
	},
	redirect: function () {
		FlowRouter.go('/projects');
	}
})