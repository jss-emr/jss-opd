Ext.define('Jss.Outpatient.view.history.HistorySummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias:'widget.historySummary',
    config:{
        layout:'fit',
        items: [
            {
                xtype: 'list',
                html: "<b>History & Symptoms</b>",
                store:'HistoryObservations',
                inline:true,
                itemTpl: '{summary}'
            }
        ],
    }
});