Template.Reading.helpers({
	imageFile: function () {
		var picId = this.pictures[0];
    return Images.findOne({_id: picId});
  }
})