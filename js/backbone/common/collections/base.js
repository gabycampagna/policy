'use strict';
var Backbone = require('backbone');
var BaseModel = require('../models/base');
var helpers = require('../helpers');


module.exports = Backbone.Collection.extend({
    model: BaseModel,

    // simple wrapper for the Backbone.sync method to apply the common header(s)
    sync: function (method, collection, options) {
        options = helpers.addHeaders(options);     // eslint-disable-line no-param-reassign
        options.error = helpers.errorHandler;
        return Backbone.sync.call(this, method, collection, options);
    }
});
