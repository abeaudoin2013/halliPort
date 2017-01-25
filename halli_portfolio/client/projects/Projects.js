Meteor.subscribe('projects');
Meteor.subscribe('files.images.all');

Template.Projects.rendered = function () {
 if(!this._rendered) {
      this._rendered = true;
      $("#projects").addClass("li-selected");
      $("#projects").siblings().removeClass("li-selected");
    }
};

Template.Projects.helpers({
	projects: () => {
		return Projects.find({});
	}
});

