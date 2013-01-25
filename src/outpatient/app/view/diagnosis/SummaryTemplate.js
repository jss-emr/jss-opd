Ext.define('Jss.Outpatient.view.diagnosis.SummaryTemplate', {
    extend: 'Ext.XTemplate',

    html: ['{[this.diagnosisSummary(values)]}'],

    constructor: function() {
        this.callParent(this.html);
    },

    diagnosisSummary: function(observation) {
        if(observation.discarded === true) {
            return "<div class='discarded'>" + observation.summary + "</div>";
        }
        return "<div>" + observation.summary + "</div>";
    }
});