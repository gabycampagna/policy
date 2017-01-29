'use strict';
var BaseModel = require('./base');

module.exports.User = BaseModel.extend({
    defaults: {
        username: undefined,
        name: undefined
    }
});
