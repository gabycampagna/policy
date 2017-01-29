'use strict';
var Marionette = require('backbone.marionette');

// Templates
var LayoutTemplate = require('./templates/create_layout.hbs');

/*
 * Defines profiles region when entering the profiles page
 */
var LayoutView = Marionette.View.extend({
    template: LayoutTemplate,
    regions: {
        headerRegion: '#header-region',
        cancelRegion: '#cancel-region',
        selectRegion: '#select-region',
        policyRegion: '#policy-region'
    }
});
module.exports = LayoutView;
