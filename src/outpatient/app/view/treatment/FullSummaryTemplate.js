Ext.define('Jss.Outpatient.view.treatment.FullSummaryTemplate', {
    extend: 'Ext.XTemplate',

    html: ['{[this.summary(values)]}'],

    constructor: function() {
        this.callParent(this.html);
    },

    summary: function(treatment) {
        var str = Ext.Array.clean(treatment.summary.full).map(function(item) {
            return "<span>" + item + "</span>";
        }).join(" - ");

        return "<div class='complete-data'>" + str + "</div>";
    },
});