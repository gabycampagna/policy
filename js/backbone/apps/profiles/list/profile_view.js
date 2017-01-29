'use strict';
var BackboneRadio = require('backbone.radio');
var Marionette = require('backbone.marionette');

// Channels
var policiesChannel = BackboneRadio.channel('policies');

// Templates
var Template = require('./templates/profile.hbs');


// View logic
var ProfileView = Marionette.View.extend({
    template: Template,
    events: {
        'click .profile-card': 'showPolicy'
    },

    initialize: function () {
        this.name = this.options.name;
    },

    showPolicy: function () {
        // Set the profile id to an arbitrary value until able to get from api
        policiesChannel.request('show', '12345');
    },

    templateContext: function () {
        var self = this;

        return {
            name: function () {
                return self.name;
            }
        };
    }
});
module.exports = ProfileView;
