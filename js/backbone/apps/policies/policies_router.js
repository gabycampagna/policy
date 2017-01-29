'use strict';
var Marionette = require('backbone.marionette');

// Router logic
var PoliciesRouter = Marionette.AppRouter.extend({
    appRoutes: {
        'policies/:id': 'showPolicies'
    }
});
module.exports = PoliciesRouter;
