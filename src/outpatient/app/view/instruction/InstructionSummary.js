Ext.define('Jss.Outpatient.view.instruction.InstructionSummary', {
    extend: 'Ext.Container',
    alias: 'widget.instruction',

    config: {
        layout: 'fit',
        title: 'Instructions',
        items: [{
            xtype: 'list',
            id: 'instructionSummaryList',
            scrollable: 'false',
            store: 'Instructions',
            html: '<b>Instructions</b>',
            inline: true,
            itemTpl: '<table><tr class="summary"><td>{type}</td></tr></table>',

            listeners: {
                touchstart: {
                    element: 'innerElement',
                    fn: function(event, div, listener) {
                        var l = Ext.getCmp('mainview');
                        l.push(Ext.getCmp('instruction-card'));
                    }
                }
            }
        }]
    }
});
