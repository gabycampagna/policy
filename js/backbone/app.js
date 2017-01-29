'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

/*
 * The Application is a container for the rest of your code. It is recommended
 * that every Marionette app have at least one instance of Application.
 *
 * For more about this object, consult the following resource:
 * http://marionettejs.com/docs/marionette.application.html
 */
var App = new Marionette.Application({
	region: 'main > .container-fluid'
});

// add context object to hold temporary state
App.context = {};

/*
 * These are all Marionette Modules. Modules help developers build
 * individual components of the application in a reusable way.
 *
 * All the modules are defined in the apps folder.
 */
var MainModule = require('./apps/main/main_module')
var PoliciesModule = require('./apps/policies/policies_module')
var ProfilesModule = require('./apps/profiles/profiles_module');

App.on('start', function() {
	// Start Backbone routing capabilities
	Backbone.history.start();

	// Initialize the modules
	var mainModule = new MainModule({app: App});
	var profilesModule = new ProfilesModule({app: App});
	var policiesModule = new PoliciesModule({app: App});

	// Start the modules which will set handlers
  	profilesModule.start();
  	policiesModule.start();

  	// Start the main module to handle initilizing the application
  	mainModule.start();
});

// start the application; the NavigationModule is the only
// module with a defined 'start' method. This will kick off
// the modules by calling 'start' method defined for each
// module. The NavigationModule will display the navbar and
// notify the HomeModule to display the 'home' page. If a
// session exists then a different navbar and 'home' page.
App.start();
