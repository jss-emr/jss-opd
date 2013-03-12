Ext.define('Jss.Outpatient.view.diagnosis.DiagnosisEdit', {
    extend: 'Ext.Container',
    alias: 'widget.diagnosis-edit',

    requires: ['Jss.Outpatient.view.diagnosis.DiagnosisObservationSummaryPanel'],

    config: {
        layout: 'vbox',
        title: 'Diagnosis',
        items: [
            {
                xtype: 'diagnosisObservationSummaryPanel',
                id:'diagnosis-observationSummaryPanel',
                itemTpl: Ext.create('Jss.Outpatient.view.diagnosis.SummaryTemplate'),
                store: 'Diagnosis',
                cls: 'diagnosisSummary',
                flex: 1,
            },
            {
                xtype : 'addObservationPanel',
                id:'diagnosis-addObservationsPanel',
                scrollable: false,
                autoCompleteStore: 'DiagnosisConcepts',
                autoCompleteCategory: 'Diagnosis',
                autoCompleteItemTpl: '{name}',
                autoCompleteFilterKey: 'name',
                autoCompletePlaceHolder: 'Add Diagnosis ..',
                flex: 2,
            }
        ]
    },
 })
