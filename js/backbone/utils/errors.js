'use strict';
var Notify = require('./notify');
var BackboneRadio = require('backbone.radio');

// Channel
var navChannel = BackboneRadio.channel('nav');
var sessionChannel = BackboneRadio.channel('session');


module.exports = function handleError(error) {
    var response = error.responseJSON;
    var status = error.status || 500;
    var statusText = error.statusText || error.message;
    var errmsg = error.message;
    if (response) {
        errmsg = response.error;
    }

    if (status === 400) {
        Notify.error(errmsg);
        throw new Error(statusText);
    } else if (status === 401) {
        Notify.error(errmsg);
        sessionChannel.request('session:stop');
        navChannel.request('show');
    } else if (status === 500) {
        console.log(error); // eslint-disable-line no-console
        Notify.error(errmsg);
        throw new Error(statusText);
    }
};
