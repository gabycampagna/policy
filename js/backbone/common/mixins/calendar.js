'use strict';


module.exports = {

    _init: function () {
        if (this.calendarEnabled === undefined) {
            this.calendarEnabled = false;
        }
    },

    pickDate: function (input) {
        this._init();
        if (input.data('DateTimePicker') && this.calendarEnabled) {
            input.data('DateTimePicker').destroy();
            this.calendarEnabled = false;
        } else {
            input.datetimepicker({
                widgetPositioning: {
                    horizontal: 'auto',
                    vertical: 'bottom'
                }
            }).on('dp.change', function () {
                input.trigger('change');
            });
            input.data('DateTimePicker').show();
            this.calendarEnabled = true;
        }
    },

    removeDatePicker: function (input) {
        this._init();
        if (input.data('DateTimePicker') && this.calendarEnabled) {
            input.data('DateTimePicker').destroy();
            this.calendarEnabled = false;
        }
    }

};
