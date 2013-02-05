Ext.define('Jss.Outpatient.view.instruction.InstructionSummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias: 'widget.instruction',

    config: {
        layout: 'fit',
        title: 'Instructions',
        items: [
            {
                xtype: 'titlebar',
                title: 'Instructions',
                docked: 'top',
                cls: 'summaryTitle'
            },
            {
                xtype: 'dataview',
                id: 'instructionSummaryList',
                scrollable: 'false',
                store: 'Instructions',
                itemTpl: '{summary}',
                cls: 'stripedList',
            }
        ]
    }
});
