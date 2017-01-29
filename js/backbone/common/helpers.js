'use strict';
var errorHandler = require('../utils/errors');
var Session = require('../utils/session');

// create an instance of the session object that can be used to
// check the current session and retrieve the token from the session
// to provide support for common auth protocol.
var session = new Session();

var helpers = module.exports;

helpers.addHeaders = function (options) {
    options = options || {};    // eslint-disable-line no-param-reassign
    options.headers = options.headers || {};
    // if basic auth was provided then no need to include the session details
    if (!options.headers.Authorization && session.isAuth()) {
        options.headers['X-Session-Token'] = session.getToken();
    }
    return options;
};

helpers.errorHandler = errorHandler;
