'use strict';
var Marionette = require('backbone.marionette');
var BackboneRadio = require('backbone.radio');

// Templates
var Template = require('./templates/header.hbs');

var policiesChannel = BackboneRadio.channel('policies');

// View logic
var HeaderView = Marionette.View.extend({
    template: Template,
    events: {
        'click #create-policy': 'createPolicy'
    },

    createPolicy: function () {
        // Arbitrary id to represent profile id until data is retrieved from api
        policiesChannel.request('create', '12345');
    },

    onShow: function () {
        this.$el.hide();
        this.$el.fadeIn('slow');
    }
});
module.exports = HeaderView;
