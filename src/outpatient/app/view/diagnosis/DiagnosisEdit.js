Ext.define('Jss.Outpatient.view.diagnosis.DiagnosisEdit', {
    extend: 'Ext.Container',
    alias: 'widget.diagnosis-edit',

    config: {
        layout: 'vbox',
        title: 'Diagnosis',
        items: [
            {
                xtype: 'list',
                id:'diagnosis-observationSummaryPanel',
                itemTpl: Ext.create('Jss.Outpatient.view.diagnosis.SummaryTemplate'),
                store: 'Diagnosis',
                inline: true,
                cls: 'diagnosisSummary',
                flex: 1,
                scrollable: 'vertical',
                listeners: {
                    itemswipe: function(list, index, target, record) {
                        list.getStore().remove(record);
                    }
                }
            },
            {
                xtype : 'addObservationPanel',
                id:'diagnosis-addObservationsPanel',
                scrollable: false,
                autoCompleteStore: 'DiagnosisConcepts',
                autoCompleteItemTpl: '{name}',
                autoCompleteFilterKey: 'name',
                flex: 3,
            }
        ]
    }
 })
