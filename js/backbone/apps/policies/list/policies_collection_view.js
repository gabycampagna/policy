'use strict';
var Marionette = require('backbone.marionette');

// Templates
var Template = require('./templates/policies.hbs');

// Views
var PolicyView = require('./policy_view');


// View logic
var PoliciesCollectionView = Marionette.View.extend({
    template: Template,
    childView: PolicyView,
    initialize: function () {
        // Listen for the collection to reset
        // Render the view when a reset is trigger from the collection
        this.listenTo(this.collection, 'reset', this.render);
    },

    childViewOptions: function () {
        // pass our user option to our childView
        return {
            policy: this.options.policy
        };
    },

    onRender: function () {
        this.$el.hide();
        this.$el.fadeIn(200);
    }
});
module.exports = PoliciesCollectionView;
