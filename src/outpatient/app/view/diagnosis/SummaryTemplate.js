Ext.define('Jss.Outpatient.view.diagnosis.SummaryTemplate', {

    html: ['[{this.diagnosisSummary(values)}]'],

    constructor: function() {
        this.callParent(this.html);
    },

    diagnosisSummary: function(observation) {
        console.log(observation);
        if(observation.properties.discarded === true) {
            return "<div class='discarded'>" + observation.summary + "</div>";
        }
        return "<div>" + observation.summary + "</div>";
    }
});