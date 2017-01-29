'use strict';
var BaseModel = require('./base');


module.exports = BaseModel.extend({
    urlRoot: '/v1/profiles',
    defaults: {
        id: undefined,
        name: undefined
    }
});
