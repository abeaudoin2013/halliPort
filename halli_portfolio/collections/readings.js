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
		label: "Description"
	},
	categories: {
    type: String,
    label: "Categories"
  },
	pictures: {
    type: [String],
    label: 'Add Pictures'
  },
  "pictures.$": {
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    }
  }
});

Readings.attachSchema(ReadingSchema);