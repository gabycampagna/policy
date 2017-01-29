'use strict';
var BaseModel = require('./base');


module.exports = BaseModel.extend({
    urlRoot: '/v1/policies',
    defaults: {
        id: undefined,
        name: undefined
    }
});
