FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Home'});
	}
});

FlowRouter.route('/projects', {
  name: 'projects',
  action() {
  	BlazeLayout.render('MainLayout', {main: 'Projects'});
  }
});
FlowRouter.route('/new-project', {
  name: 'new-project',
  action() {
  	BlazeLayout.render('MainLayout', {main: 'NewProject'});
  }
});

FlowRouter.route('/login', {
	name: 'login',
	action() {
  	BlazeLayout.render('MainLayout', {main: 'Login'});
  }
})