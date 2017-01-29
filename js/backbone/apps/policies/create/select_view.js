'use strict';
var BackboneRadio = require('backbone.radio');
var Marionette = require('backbone.marionette');

// Templates
var Template = require('./templates/select.hbs');

var policiesChannel = BackboneRadio.channel('policies');

// View logic
var SelectView = Marionette.View.extend({
    template: Template,
    events: {
        'click #performance': 'showPerformance',
        'click #update': 'showUpdate',
        'click @ui.dropdownItem': 'clickDropdown'
    },
    ui: {
        btnSelectPolicy: '.btn-select-policy',
        dropdownItem: '.dropdown-item'
    },

    initialize: function () {
        this.layoutView = this.options.layoutView;
    },

    clickDropdown: function (e) {
        var attribute = e.currentTarget.innerText;
        this.ui.btnSelectPolicy.text(attribute);
        this.ui.btnSelectPolicy.append('<span class="caret"></span>');
    },

    showPerformance: function () {
        policiesChannel.request('show:performance', this.layoutView);
    },

    showUpdate: function () {
        policiesChannel.request('show:update', this.layoutView);
    },

    onShow: function () {
        this.$el.hide();
        this.$el.fadeIn('slow');
    }
});
module.exports = SelectView;
