Ext.define('Jss.Outpatient.view.history.HistorySummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias:'widget.historySummary',
    config:{
        layout:'hbox',
        items: [
            {
                xtype: 'container',
                html: 'History & Symptoms',
                cls: 'summaryTitle',
            },
            {
                xtype: 'container',
                layout: 'fit',
                flex: 4,
                cls: 'content',
                items: [{
                    xtype: 'dataview',
                    store:'HistoryObservations',
                    itemTpl: Ext.create('Jss.Outpatient.view.observation.SummaryTemplate'),
                    cls: 'observationVisitPage stripedList',
                }]
            },
            {
                xtype: 'container',
                flex: 1,
                layout: 'fit',
                items: [{
                    xtype: 'button',
                    id: "symptomsTemplateButton",
                    html: 'Symptoms<br/>Templates',
                    top: 1,
                    width: '100%',
                    cls: 'smallFont',
                }]
            },
        ],
    },
});