'use strict';
var Backbone = require('backbone');
var BackboneRadio = require('backbone.radio');
var Marionette = require('backbone.marionette');

// Templates
var Template = require('./templates/cancel.hbs');
var profilesChannel = BackboneRadio.channel('profiles');

// View logic
var CancelView = Marionette.View.extend({
    template: Template,
    events: {
        'click #btn-cancel': 'cancelCreate'
    },

    cancelCreate: function () {
        Backbone.history.navigate('');
        profilesChannel.request('show');
    },

    onShow: function () {
        this.$el.hide();
        this.$el.fadeIn('slow');
    }
});
module.exports = CancelView;
