Ext.define('Jss.Outpatient.view.examination.ExaminationEdit', {
    extend: 'Ext.Container',
    alias: 'widget.examinationEdit',
    config: {
        layout: 'vbox',
        title: 'Examination',
        items: [
            {
                xtype : 'observationSummaryPanel',
                id:'examination-observationSummaryPanel',
                store: 'ExaminationObservations',
                flex: 1,
            },
            {
                xtype : 'addObservationPanel',
                id:'examination-addObservationsPanel',
                scrollable: false,
                autoCompleteStore: 'ExaminationConcepts',
                autoCompleteCategory: 'Examination',
                autoCompleteItemTpl: '{name}',
                autoCompleteFilterKey: 'name',
                autoCompletePlaceHolder: 'Add Examinations ..',
                flex: 2,
            }
        ]
    }
})