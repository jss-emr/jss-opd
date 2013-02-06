Ext.define('Jss.Outpatient.view.observation.SummaryTemplate', {
    extend:'Ext.XTemplate',

    html: ['{[this.summary(values)]}'],

    constructor: function() {
        this.callParent(this.html);
    },

    summary: function(observation) {
        if(observation.summary === null) {
            return "<div class='incomplete-data'>" + observation.concept.get('name')  + ": ?? </div>";
        }
        return "<div class='complete-data'>" + observation.summary  + "</div>";
    }
});
