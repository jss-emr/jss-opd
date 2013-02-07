Ext.define('Jss.Outpatient.view.history.HistoryEdit', {
    extend: 'Ext.Container',
    alias:'widget.historyEdit',

    config: {
        layout: 'vbox',
        autoDestroy: false,
        title: 'History',
        items: [
            {
                xtype : 'observationSummaryPanel',
                id:'history-observationsSummaryPanel',
                store: 'HistoryObservations',
                flex: 20,
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