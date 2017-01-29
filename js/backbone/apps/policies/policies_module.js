'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var BackboneRadio = require('backbone.radio');

var policiesChannel = BackboneRadio.channel('policies');

var CreateController = require('./create/create_controller');
var ListController = require('./list/list_controller');

// Routers
var PoliciesRouter = require('./policies_router');

// Module logic
var PoliciesModule = Marionette.Object.extend({

    initialize: function () {
        this.app = this.options.app;

        // Module really should not be the Controller but since there
        // are multiple controllers within the scope of this Module
        // and the routes are really directed to the correct controller
        // via the Module so in this case the Module is the master
        // controller for the Router.
        this.router = new PoliciesRouter({
            controller: this
        });
    },

    _setHandlers: function () {
        policiesChannel.reply('create', this.createPolicy, this);
        policiesChannel.reply('show', this.showPolicies, this);
    },

    createPolicy: function () {
        Backbone.history.navigate('create');
        document.title = 'Policy Editor - Create Policy';
        var createController = new CreateController({
            region: this.app.layoutView.getRegion('mainRegion')
        });
        createController.createPolicy();
    },

    showPolicies: function () {
        Backbone.history.navigate('policies');
        document.title = 'Policy Editor - Select Policy';
        var listController = new ListController({
            region: this.app.layoutView.getRegion('mainRegion')
        });
        listController.showPolicies();
    },

    start: function(){
        this._setHandlers();
    }
});
module.exports = PoliciesModule;
