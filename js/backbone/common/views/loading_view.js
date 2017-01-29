'use strict';
var Marionette = require('backbone.marionette');

// Templates
var Template = require('./templates/loading.hbs');

// View logic
var LoadingView = Marionette.View.extend({
    template: Template,

    templateHelpers: function () {
        // LoadingView has two size options, small and a default size
        var size = this.options.displaySize;

        return {
            small: function () {
                // Specify small for a smaller header tag
                return size === 'small';
            }
        };
    },
});
module.exports = LoadingView;
