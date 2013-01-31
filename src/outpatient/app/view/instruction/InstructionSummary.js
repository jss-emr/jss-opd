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
                xtype: 'list',
                id: 'instructionSummaryList',
                scrollable: 'false',
                store: 'Instructions',
                inline: true,
                itemTpl: '{summary}',
            }
        ]
    }
});
