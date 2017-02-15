Template.NewReading.onCreated(function () {
	var self = this;
	self.autorun(function() {
    self.subscribe('readings');
	});
});

Template.NewReading.rendered = function () {
 if(!this._rendered) {
      this._rendered = true;
      $("#new-reading").addClass("li-selected");
      $("#new-reading").closest("a").siblings().find("li").removeClass("li-selected");
    }
};

Template.NewReading.helpers({
  categoryOptions: function () {
  	var categories = Readings.find({}, {fields: {'category':1}});
  	var categoriesArr = []
  	categories.forEach(function (cat, i) {
  		categoriesArr.push(cat.category);
  	});
  	var options = categoriesArr.reduce((categories, line) => {
  		categories[line] = line;
  		return categories
  	}, {});
  	options.add = "Add";
  	return options;
  	
  },
  admin: function() {
    return Roles.userIsInRole(Meteor.userId(), 'admin');
  },
  redirect: function () {
    FlowRouter.go('/readings');
  }
});


AutoForm.hooks({
  insertReadingForm: {
    before: {
      // Replace `formType` with the form `type` attribute to which this hook applies
      insert: function(doc) {
        // alter the doc
        var c = doc.addCategory;
        doc.category = c;
        delete doc.addCategory;
        return doc;
      }
    },
  }
});