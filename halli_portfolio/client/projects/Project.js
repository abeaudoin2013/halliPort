Template.Project.onRendered(function () {
 if(!this._rendered) {
      this._rendered = true;
      $("#projects").addClass("li-selected");
      $("#projects").siblings().removeClass("li-selected");
    }
});

Template.Project.onCreated(function () {
	var self= this;
	self.autorun(function() {
    self.subscribe('projects');
    self.subscribe('files.images.all');
	});
});


Template.Project.helpers({
	project: () => {
		var id = FlowRouter.getParam("id");
		return Projects.findOne({_id: id});
	},
	pictures: function () {
		var id = FlowRouter.getParam("id");
		var project = Projects.findOne({_id: id});
		return Images.find({_id: {"$in": project.pictures}});
	},
	firstPicture: function () {
		var id = FlowRouter.getParam("id");
		var project = Projects.findOne({_id: id});
		var image = Images.findOne({_id: project.pictures[0]});
		return image.link();
	},
	picture: function (obj) {
		var image = Images.findOne({_id: obj._id});
		return image.link();
	},
	checkNum: function (i) {
		if (i === 0) {
			return true
		}
	}
});

Template.Project.events({
	"click .image": function (evt) {
		var $i = $(evt.target);
		var url = $i.data("link");
		$i.addClass("image-selected");
		$i.siblings().removeClass("image-selected");

		$("#main-image").css({"background-image": "url(" + url + ")"});
	}
});