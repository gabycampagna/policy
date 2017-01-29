'use strict';
var Backbone = require('backbone');
var BackboneRadio = require('backbone.radio');
var Marionette = require('backbone.marionette');

var profilesChannel = BackboneRadio.channel('profiles');

// Templates
var Template = require('./templates/metrics.hbs');

// View logic
var MetricsView = Marionette.View.extend({
    template: Template,
    events: {
        'click #btn-cancel': 'cancelCreate',
        'click #btn-save': 'savePolicy'
    },

    cancelCreate: function () {
        Backbone.history.navigate('');
        profilesChannel.request('show');
    },

    savePolicy: function () {
        Backbone.history.navigate('');
        profilesChannel.request('show');
    },

    onShow: function () {
        this.$el.hide();
        this.$el.fadeIn('slow');
    }
});
module.exports = MetricsView;
