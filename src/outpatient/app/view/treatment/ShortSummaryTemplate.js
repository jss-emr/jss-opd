Ext.define('Jss.Outpatient.view.treatment.ShortSummaryTemplate', {
    extend: 'Ext.XTemplate',

    html: ['{[this.summary(values)]}'],

    constructor: function() {
        this.callParent(this.html);
    },

    summary: function(treatment) {
        if(treatment.summary == null) {
            return "<div class='incomplete-data'>" + treatment.name + " : ??</div>";
        }

        var str = Ext.Array.clean(treatment.summary.short).map(function(item) {
            return "<span>" + item + "</span>";
        }).join(" - ");

        return "<div class='complete-data'>" + str + "</div>";
    },
});