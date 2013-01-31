Ext.define('Jss.Outpatient.view.instruction.InstructionEdit', {
    extend: 'Ext.Container',
    alias: 'widget.instruction-edit',

    config: {
        layout: 'vbox',
        items: [{
            xtype: 'list',
            flex: 1,
            store: 'Instructions',
            html: '<b>Instructions</b>',
            inline: true,
            itemTpl: '<table><tr class="summary"><td>{type}</td></tr></table>'
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