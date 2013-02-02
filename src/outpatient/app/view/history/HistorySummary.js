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
                    itemTpl: '{summary}',
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
    },

    initialize: function() {
        this.callParent();
        this.summaryPanelList = Ext.getCmp("historySummaryPanel").getItems().items[0];
        this.historyQueueStore = Ext.getStore('HistoryQueue');

        this.historyQueueStore.on('addrecords', this.dataQueued, this);
        this.historyQueueStore.on('removerecords', this.dataQueued, this);
    },

    dataQueued: function() {
        if(this.historyQueueStore.getCount() >= 1)
            this.summaryPanelList.setBaseCls("warning");
        else
            this.summaryPanelList.setBaseCls("");
    }
});