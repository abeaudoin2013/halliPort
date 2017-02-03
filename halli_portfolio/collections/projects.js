Images = new FilesCollection({
  collectionName: 'Images',
  allowClientCode: true, // Required to let you remove uploaded file
  onBeforeUpload: function (file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.ext)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  },
  storagePath: "./imgs"
});

Projects = new Meteor.Collection('projects');

Projects.allow({
  insert: function (userId, doc) {
    return !!userId;
  }
});

ProjectSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name of Project"
	},
	desc: {
		type: String,
		label: "Description"
	},
	projectDate: {
		type: Date,
		label: "Project Date"
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

Projects.attachSchema(ProjectSchema);