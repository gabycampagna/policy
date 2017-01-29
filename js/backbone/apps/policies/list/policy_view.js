'use strict';
var Marionette = require('backbone.marionette');

// Templates
var Template = require('./templates/policy.hbs');


// View logic
var PolicyView = Marionette.View.extend({
    template: Template,

    initialize: function () {
        this.name = this.options.name;
    },

    templateContext: function () {
        var self = this;

        return {
            name: function () {
                return self.name;
            }
        };
    }
});
module.exports = PolicyView;
