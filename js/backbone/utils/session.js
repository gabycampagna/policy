'use strict';

var _ = require('underscore');
var BackboneRadio = require('backbone.radio');
var Marionette = require('backbone.marionette');
var Cookie = require('cookies-js');

Cookie.defaults = {
    path: '/',
    domain: window.location.hostname
};

var sessionChannel = BackboneRadio.channel('session');


var Session = Marionette.Object.extend({

    initialize: function () {
        this.token = undefined;
        this.authenticated = false;
        this.user = undefined;

        // see if the Cookies exist and load up the data
        this._checkAuth();
        this._checkUser();
    },

    setHandlers: function () {
        sessionChannel.reply('session:start', this.start, this);
        sessionChannel.reply('session:stop', this.done, this);
        sessionChannel.reply('session:refresh', this.refresh, this);
    },

    isAuth: function () {
        this._checkAuth();
        return this.authenticated;
    },

    isLoaded: function () {
        return this.authenticated && this.user;
    },

    start: function (token, user) {
        Cookie.set('session-token', token);
        this._checkAuth();

        this.refresh(user);

        this.trigger('session:started');
    },

    done: function () {
        Cookie.expire('session-token');
        this.token = undefined;
        this.authenticated = false;

        Cookie.expire('session-user');
        this.user = undefined;

        this.trigger('session:ended');
    },

    refresh: function (user) {
        Cookie.set('session-user', JSON.stringify(user));
        this._checkUser();
    },

    getToken: function () {
        this._checkAuth();
        return this.token;
    },

    getUser: function () {
        this._checkUser();
        return this.user;
    },

    getUsername: function () {
        this._checkUser();
        if (!this.user) {
            return null;
        }
        return this.user.username;
    },

    _checkAuth: function () {
        var token = Cookie.get('session-token');
        // based on original source there seems to be times when
        // cookie-js sets the value to the string 'undefined' so
        // set to actual undefined to provides the expect outcome.
        if (token === 'undefined') {
            token = undefined;
        }

        this.token = token;
        this.authenticated = Boolean(token);
    },

    _checkUser: function () {
        var user = Cookie.get('session-user');

        // based on original source there seems to be times when
        // cookie-js sets the value to the string 'undefined' so
        // set to actual undefined to provides the expect outcome.
        if (user === 'undefined') {
            user = undefined;
        }

        if (_.isString(user)) {
            try {
                user = JSON.parse(user);
            } catch (e) {
                user = undefined;
            }
        }

        if (!_.isObject(user)) {
            user = undefined;
        }

        this.user = user;
    }

});

module.exports = Session;
