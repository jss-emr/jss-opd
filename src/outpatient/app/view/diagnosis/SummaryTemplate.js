Ext.define('Jss.Outpatient.view.diagnosis.SummaryTemplate', {
    extend: 'Ext.XTemplate',

    html: ['{[this.diagnosisSummary(values)]}'],

    constructor: function() {
        this.callParent(this.html);
    },

    diagnosisSummary: function(observation) {
        if(observation.discarded === true) {
            return "<div class='discarded complete-data'>" + observation.summary + "</div>";
        }
        if(observation.finalized === true) {
            return "<div class='final'>" + observation.summary + "</div>";
        }
        return "<div class='complete-data'>" + observation.summary + "</div>";
    }
});