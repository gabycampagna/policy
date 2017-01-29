'use strict';
var Marionette = require('backbone.marionette');

// Templates
var LayoutTemplate = require('./templates/nav_layout.hbs');

/*
 * Defines nav region when entering the application
 */
var LayoutView = Marionette.View.extend({
    template: LayoutTemplate,
    regions: {
        logoRegion: '#logo-region'
    }
});
module.exports = LayoutView;
