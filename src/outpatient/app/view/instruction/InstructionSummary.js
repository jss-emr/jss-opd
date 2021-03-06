Ext.define('Jss.Outpatient.view.instruction.InstructionSummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias: 'widget.instruction',

    config: {
        layout: 'hbox',
        title: 'Instructions',
        items: [
            {
                xtype: 'container',
                html: 'Instructions',
                cls: 'summaryTitle',
            },
            {
                xtype: 'container',
                layout: 'fit',
                flex: 1,
                cls: 'content',
                items: [{
                    xtype: 'dataview',
                    id: 'instructionSummaryList',
                    scrollable: true,
                    store: 'Instructions',
                    itemTpl: Ext.create('Jss.Outpatient.view.observation.SummaryTemplate'),
                    inline: true,
                    itemCls: 'observationVisitPage',
                }]
            },
        ]
    }
});
