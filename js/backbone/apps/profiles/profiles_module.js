'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var BackboneRadio = require('backbone.radio');

var profilesChannel = BackboneRadio.channel('profiles');

var ListController = require('./list/list_controller');

// Module logic
var ProfilesModule = Marionette.Object.extend({

    initialize: function () {
        this.app = this.options.app;
    },

    _setHandlers: function () {
        profilesChannel.reply('show', this.show, this);
    },

    show: function () {
        Backbone.history.navigate('');
        document.title = 'Policy Editor - Select Profile';
        var listController = new ListController({
            layoutView: this.app.layoutView
        });
        listController.listProfiles();
    },

    start: function () {
        this._setHandlers();
    }
});
module.exports = ProfilesModule;
