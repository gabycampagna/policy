'use strict';
var Backbone = require('backbone');
var helpers = require('../helpers');

module.exports = Backbone.Model.extend({
    defaults: {},

    // simple wrapper for the Backbone.sync method to apply the common header(s)
    sync: function (method, model, options) {
        options = helpers.addHeaders(options);    // eslint-disable-line no-param-reassign
        options.error = helpers.errorHandler;
        return Backbone.sync.call(this, method, model, options);
    }
});
