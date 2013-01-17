Ext.define('Jss.Outpatient.view.history.HistoryEdit', {
    extend: 'Ext.Container',
    alias:'widget.historyEdit',
    requires : [
        'Jss.Outpatient.view.history.edit.ObservationsPanel',
        'Jss.Outpatient.view.history.edit.AddObservationPanel',
        'Jss.Outpatient.view.history.edit.AddObservationDetailsPanel',
    ],
    config: {
        layout: 'vbox',
        autoDestroy: false,
        title: 'History',
        items: [
            {
                xtype : 'observationsPanel',
                id:'observationsPanel',
                flex: 1,
            },
            {
                xtype : 'addObservationPanel',
                id:'addObservationsPanel',
                scrollable: false,
                flex: 2,
            }
        ]
    }
});