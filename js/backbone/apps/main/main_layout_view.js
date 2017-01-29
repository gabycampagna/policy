'use strict';
var Marionette = require('backbone.marionette');

// Templates
var LayoutTemplate = require('./templates/main_layout.hbs');

/*
 * The application is split into two regions:
 *
 * nav-region: includes logo of and links of the application
 * main-region: defines the main content area of the application
 */
var LayoutView = Marionette.View.extend({
    template: LayoutTemplate,
    regions: {
        navRegion: '#nav-region',
        mainRegion: '#main-region'
    }
});
module.exports = LayoutView;
