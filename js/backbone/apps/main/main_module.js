'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var BackboneRadio = require('backbone.radio');

// Channels
var profilesChannel = BackboneRadio.channel('profiles');

// Views
var LayoutView = require('./main_layout_view');

// Controllers
var NavController = require('../navigation/nav_controller');

var MainModule = Marionette.Object.extend({

    initialize: function () {
        this.app = this.options.app;
        this.region = this.app.getRegion('mainRegion');
        this.layoutView = new LayoutView();
    },

    _showNavBar: function () {
        var controller = new NavController({
            app: this.app
        });
        controller.show();
    },

    _showMainContent: function () {
        profilesChannel.request('show');
    },

    _show: function () {
        // show website
        var mainRegion = this.app.getRegion('mainRegion');
        this.app.layoutView = this.layoutView;
        mainRegion.show(this.layoutView);
        this._showNavBar();
        this._showMainContent();
    },

    _showOnEvent: function () {
        Backbone.history.navigate('');
        this._show();
    },

    start: function () {
        this._show();
    }

});
module.exports = MainModule;
