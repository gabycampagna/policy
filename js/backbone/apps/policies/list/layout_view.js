'use strict';
var Marionette = require('backbone.marionette');

// Templates
var LayoutTemplate = require('./templates/list_layout.hbs');

/*
 * Defines profiles region when entering the profiles page
 */
var LayoutView = Marionette.View.extend({
    template: LayoutTemplate,
    regions: {
        headerRegion: '#header-region',
        policiesRegion: '#policies-region'
    }
});
module.exports = LayoutView;
