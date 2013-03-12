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
                flex: 1,
            },
            {
                xtype : 'addObservationPanel',
                id:'history-addObservationsPanel',
                scrollable: false,
                autoCompleteStore: 'HistoryConcepts',
                autoCompleteCategory: 'Concept',
                autoCompleteItemTpl: '{name}',
                autoCompleteFilterKey: 'name',
                autoCompletePlaceHolder: 'Add History or Symptoms ..',
                flex: 2,
            }
        ]
    }
});