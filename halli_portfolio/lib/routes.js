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

FlowRouter.route('/projects/:id', {
  name: 'projects',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Project'});
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
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    BlazeLayout.render('MainLayout', {main: 'About'});
  }
});

FlowRouter.route('/readings', {
  name: 'readings',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Readings'});
  }
});

FlowRouter.route('/new-reading', {
  name: 'new-reading',
  action() {
    BlazeLayout.render('MainLayout', {main: 'NewReading'});
  }
});