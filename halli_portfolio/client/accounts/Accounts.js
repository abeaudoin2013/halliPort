var myLogoutFunc = function () {
	FlowRouter.go('/');
};
var myLoginFunc = function () {
	FlowRouter.go('/');
};
AccountsTemplates.configure({
	onLogoutHook: myLogoutFunc,
	onSubmitHook: myLoginFunc
});