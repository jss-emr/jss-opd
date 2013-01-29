Ext.define('Jss.Outpatient.view.history.HistoryEdit', {
    extend: 'Ext.Container',
    alias:'widget.historyEdit',

    config: {
        layout: 'vbox',
        autoDestroy: false,
        title: 'History',
        items: [
            {
                xtype : 'list',
                id:'history-observationsSummaryPanel',
                store: 'HistoryObservations',
                inline:true,
                itemTpl: '{summary}',
                scroll:'both',
                flex: 20,
            },
            {
                xtype : 'label',
                style: 'background-color: "blue"',
                flex: 1
            },
            {
                xtype : 'addObservationPanel',
                id:'history-addObservationsPanel',
                scrollable: false,
                autoCompleteStore: 'HistoryConcepts',
                observationQueueStore: 'HistoryQueue',
                autoCompleteItemTpl: '{name}',
                autoCompleteFilterKey: 'name',
                flex: 40,
            }
        ]
    }
});