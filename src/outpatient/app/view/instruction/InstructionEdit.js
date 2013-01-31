Ext.define('Jss.Outpatient.view.instruction.InstructionEdit', {
    extend: 'Ext.Container',
    alias: 'widget.instruction-edit',

    config: {
        layout: 'vbox',
        items: [{
            xtype: 'list',
            id: 'instruction-observationSummaryPanel',
            itemTpl: '{summary}',
            store: 'Instructions',
            cls: 'diagnosisSummary stripedList',
            flex: 1,
            inline: true,
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
            id:'instruction-addObservationsPanel',
            scrollable: false,
            autoCompleteStore: 'AllInstructions',
            observationQueueStore: 'InstructionsQueue',
            autoCompleteItemTpl: '{name}',
            autoCompleteFilterKey: 'name',
            flex: 3,
        }
        ]

    }
});