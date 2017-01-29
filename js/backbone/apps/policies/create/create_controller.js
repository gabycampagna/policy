'use strict';
var BackboneRadio = require('backbone.radio');
var Marionette = require('backbone.marionette');

var policiesChannel = BackboneRadio.channel('policies');

// Views
var CancelView = require('./cancel_view');
var HeaderView = require('./header_view');
var LayoutView = require('./layout_view');
var MetricsView = require('./metrics_view');
var ScheduleView = require('./schedule_view');
var SelectView = require('./select_view');

// Controller logic
var CreateController = Marionette.Object.extend({

    initialize: function () {
        this.layoutView = null;
        this.region = this.options.region;
        this._setHandlers();
    },

    _setHandlers: function () {
        policiesChannel.reply('show:performance', this.showPerformance, this);
        policiesChannel.reply('show:update', this.showUpdate, this);
    },

    showPerformance: function () {
        this.layoutView.getRegion('cancelRegion').empty();
        this.layoutView.getRegion('policyRegion').show(new MetricsView());
    },

    showUpdate: function (layoutView) {
        this.layoutView.getRegion('cancelRegion').empty();
        this.layoutView.getRegion('policyRegion').show(new ScheduleView());
    },

    createPolicy: function () {
        this.layoutView = new LayoutView();
        this.region.show(this.layoutView);
        this.layoutView.getRegion('headerRegion').show(new HeaderView());
        this.layoutView.getRegion('cancelRegion').show(new CancelView());
        this.layoutView.getRegion('selectRegion').show(new SelectView({layoutView: this.layoutView}));
    }
});
module.exports = CreateController;
