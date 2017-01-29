'use strict';
// Underscore is included as library to Backbone, to use it require underscore
var _ = require('underscore');
var Backbone = require('backbone');
var BackboneRadio = require('backbone.radio');
var Marionette = require('backbone.marionette');

var profilesChannel = BackboneRadio.channel('profiles');

// Templates
var Template = require('./templates/schedule.hbs');

var CalendarMixin = require('../../../common/mixins/calendar');

// View logic
var ScheduleView = Marionette.View.extend({
    template: Template,
    events: {
        'click #btn-cancel': 'cancelCreate',
        'click #btn-save': 'savePolicy',
        'click #btn-start': 'startPickDate',
    },
    ui: {
        datetimepickerStart: '.datetimepicker-start'
    },

    cancelCreate: function () {
        Backbone.history.navigate('');
        profilesChannel.request('show');
    },

    savePolicy: function () {
        Backbone.history.navigate('');
        profilesChannel.request('show');
    },

    startPickDate: function () {
        this.pickDate(this.ui.datetimepickerStart);
    },

    onShow: function () {
        this.$el.hide();
        this.$el.fadeIn('slow');
    }
});

_.extend(ScheduleView.prototype, CalendarMixin);

module.exports = ScheduleView;
