Ext.define('Jss.Outpatient.view.treatment.SummaryTemplate', {
    extend: 'Ext.XTemplate',

    html: ['<table>',
                    '<tr class="summary">',
                        '<td>{medicine}</td>',
                        '<td>{[this.strength(values)]}</td>',
                        '<td>{[this.dosageTimings(values)]}</td>',
                        '<td>{[this.days(values)]}</td>',
                        '<td>{instructions}</td>',
                    '</tr>',
            '</table>'],

    constructor: function() {
        return this.callParent(this.html);
    },

    strength: function(values) {
        return values.mg == null ? "-" : values.mg + ' mg';
    },

    days: function(values) {
        return values.days == null ? "-" : values.days + ' days';
    },

    dosageTimings: function(values) {
        var morning = values.morning == null ? 0 : values.morning;
        var noon = values.noon == null ? 0 : values.noon;
        var evening = values.evening == null ? 0 : values.evening;
        var night = values.night == null ? 0 : values.night;

        return morning + '-' + noon + '-' + evening + '-' + night;
    }
});
