'use strict';
var NotifyJS = require('notifyjs-browser');
var notifyMe = new NotifyJS();

var Notify = {
    success: function (msg) {
        notifyMe.notify(msg, 'success');
    },
    info: function (msg) {
        notifyMe.notify(msg, 'info');
    },
    warning: function (msg) {
        notifyMe.notify(msg, 'warning');
    },
    error: function (msg) {
        notifyMe.notify(msg, 'error');
    }
};
module.exports = Notify;
