'use strict';
var Marionette = require('backbone.marionette');

// Templates
var Template = require('./templates/header.hbs');

// View logic
var HeaderView = Marionette.View.extend({
    template: Template,

    onShow: function () {
        this.$el.hide();
        this.$el.fadeIn('slow');
    }
});
module.exports = HeaderView;
