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
                cls: 'diagnosisSummary stripedList',
                flex: 1,
                scrollable: 'vertical',
                listeners: {
                    itemswipe: function(list, index, target, record, event) {
                        if(event.direction == 'right')
                            record.set('discarded', true);
                        else
                            record.set('discarded', false);
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
