var postSignUp = function (userId, info) {
	// FlowRouter.go('/');
	if (info.email === "halligomberg@gmail.com") {
		Roles.addUsersToRoles(userId, 'admin');
	}
	FlowRouter.go('/');
}

AccountsTemplates.configure({
	postSignUpHook: postSignUp
});