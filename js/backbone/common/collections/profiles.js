'use strict';
var BaseCollection = require('./base');
var Profile = require('../models/profile').Connection;

module.exports = BaseCollection.extend({
    model: Profile,
    url: function () {
        return '/v1/profiles';
    }
});
