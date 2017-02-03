Template.MobileNav.events({
	"click #close": function () {
		$(".mn-container").animate({left: "-100%"}, 250);
	},
	"click .li": function () {
		$(".mn-container").animate({left: "-100%"}, 250);
	}
});