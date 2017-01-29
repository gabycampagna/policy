'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Template = require('./templates/logo.hbs');
var BackboneRadio = require('backbone.radio');

// Channels
var profilesChannel = BackboneRadio.channel('profiles');

var LogoView = Marionette.View.extend({
    template: Template,
    events: {
        'click #logo': 'navigateHome'
    },

    navigateHome: function () {
        Backbone.history.navigate('');
        profilesChannel.request('show');
    }
});
module.exports = LogoView;
