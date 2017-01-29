'use strict';
var Marionette = require('backbone.marionette');

// Router logic
var ProfilesRouter = Marionette.AppRouter.extend({
    appRoutes: {
        '': 'showProfiles'
    }
});
module.exports = ProfilesRouter;
