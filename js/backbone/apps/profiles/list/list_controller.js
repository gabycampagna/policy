'use strict';
var Marionette = require('backbone.marionette');

var Profiles = require('../../../common/collections/profiles');

// Views
var HeaderView = require('./header_view');
var ProfileView = require('./profile_view');
var ProfilesView = require('./profiles_collection_view');
var LayoutView = require('./layout_view');

// Controller logic
var ListController = Marionette.Object.extend({

    initialize: function () {
        this.layoutView = this.options.layoutView;
    },

    listProfiles: function () {
        var layoutView = new LayoutView();
        var mainRegion = this.layoutView.getRegion('mainRegion');
        mainRegion.show(layoutView);
        var headerRegion = layoutView.getRegion('headerRegion');
        headerRegion.show(new HeaderView());
        var profilesRegion = layoutView.getRegion('profilesRegion');
        profilesRegion.show(new ProfileView({
            name: 'Node Cellar'
        }));
    }
});
module.exports = ListController;
