Readings = new Meteor.Collection('readings');

Readings.allow({
  insert: function (userId, doc) {
    return !!userId;
  }
});

ReadingSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name of Reading"
	},
	link: {
		type: String,
		label: "Link"
	},
	category: {
    type: String,
    label: "Category"
  },
  addCategory: {
    type: String,
    label: "Add New Category",
    optional: true
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

// AutoForm.hooks({
//   insertReadingForm: {
//     onSubmit: function (doc) {
//       console.log(doc);
//     }
//   }
// })