'use strict';
var Marionette = require('backbone.marionette');

// Templates
var Template = require('./templates/profiles.hbs');

// Views
var ProfileView = require('./profile_view');


// View logic
var ProfilesCollectionView = Marionette.CollectionView.extend({
    template: Template,
    childView: ProfileView,
    initialize: function () {
        // Listen for the collection to reset
        // Render the view when a reset is trigger from the collection
        this.listenTo(this.collection, 'reset', this.render);
    },

    childViewOptions: function () {
        // pass our user option to our childView
        return {
            profile: this.options.profile
        };
    },

    onRender: function () {
        this.$el.hide();
        this.$el.fadeIn(200);
    }
});
module.exports = ProfilesCollectionView;
