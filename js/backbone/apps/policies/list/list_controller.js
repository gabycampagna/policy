'use strict';
var Marionette = require('backbone.marionette');

var Policies = require('../../../common/collections/policies');

// Views
var HeaderView = require('./header_view');
var LayoutView = require('./layout_view');
var PolicyView = require('./policy_view');
var PoliciesView = require('./policies_collection_view');

// Controller logic
var ListController = Marionette.Object.extend({

    initialize: function () {
        this.region = this.options.region;
    },

    showPolicies: function () {
        var layoutView = new LayoutView();
        this.region.show(layoutView);
        layoutView.getRegion('headerRegion').show(new HeaderView());
        layoutView.getRegion('policiesRegion').show(new PolicyView({
            name: 'quota_exceeded'
        }));
    }
});
module.exports = ListController;
