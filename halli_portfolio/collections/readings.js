Readings = new Meteor.Collection('readings');

Readings.allow({
  insert: function (userId, doc) {
    return !!userId;
  }
});

ReadingSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name of Project"
	},
	link: {
		type: String,
		label: "Link"
	},
	category: {
    type: String,
    label: "Category"
  },
	pictures: {
    type: String,
    label: 'Add Picture',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    }
  }
});

Readings.attachSchema(ReadingSchema);