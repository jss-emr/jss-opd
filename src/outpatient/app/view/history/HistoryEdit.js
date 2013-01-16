Ext.define('Jss.Outpatient.view.history.HistoryEdit', {
    extend: 'Ext.Container',
    alias:'widget.historyEdit',
    requires : [
        'Jss.Outpatient.view.history.edit.ObservationPanel',
        'Jss.Outpatient.view.history.edit.AddObservationsPanel',
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
                xtype : 'addObservationsPanel',
                id:'addObservationsPanel',
                flex: 2,
            }
        ]
    }
});