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
                store: 'Observations',
                inline:true,
                itemTpl: '{summary}',
                scroll:'both',
                flex: 1,
            },
            {
                xtype : 'addObservationPanel',
                id:'history-addObservationsPanel',
                scrollable: false,
                autoCompleteStore: 'Concepts',
                autoCompleteItemTpl: '{name}',
                autoCompleteFilterKey: 'name',
                flex: 3,
            }
        ]
    }
});