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
        },{
            xtype: 'formpanel',
            flex: 3,
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Instruction',
                    items: [{
                        xtype: 'selectfield',
                        id: 'instructionSelector',
                        label: 'Chief Instruction',
                        valueField: 'type',
                        displayField: 'type',
                        store: 'AllInstructions'
                    }]
                }
            ]
        }]
    }
});