Ext.define('Jss.Outpatient.view.history.HistorySummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias:'widget.historySummary',
    config:{
        layout:'fit',
        items: [
            {
                xtype: 'titlebar',
                title: 'History & Symptoms',
                docked: 'top',
                cls: 'summaryTitle'
            },
            {
                xtype: 'list',
                store:'HistoryObservations',
                inline:true,
                itemTpl: '{summary}'
            }
        ],
    }
});