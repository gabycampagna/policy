'use strict';
var Marionette = require('backbone.marionette');

// Views
var LayoutView = require('./layout_view');
var LogoView = require('./logo_view');

// Controller logic
var Controller = Marionette.Object.extend({

    initialize: function () {
        this.app = this.options.app;
    },

    show: function () {
        var layoutView = new LayoutView();
        var navRegion = this.app.layoutView.getRegion('navRegion');
        navRegion.show(layoutView);
        var logoView = new LogoView();
        layoutView.getRegion('logoRegion').show(logoView);
    }
});
module.exports = Controller;
