Ext.define('Jss.Outpatient.view.history.HistorySummary', {
    extend: 'Ext.Container',
    alias:'widget.historySummary',
    config:{
        layout:'hbox',
        items: [
            {
                xtype: 'titlebar',
                title: 'History & Symptoms',
                docked: 'top',
                cls: 'summaryTitle'
            },
            {
                xtype: 'touchableContainer',
                id: 'historySummaryPanel',
                layout: 'fit',
                flex: 4,
                items: [{
                    xtype: 'list',
                    store:'HistoryObservations',
                    inline:true,
                    itemTpl: '{summary}'
                }]
            },
            {
                xtype: 'button',
                id: "symptomsTemplateButton",
                layout: 'fit',
                html: 'Select<br/>Symptoms<br/>Template',
                flex: 1,
            },
        ],
    }
});