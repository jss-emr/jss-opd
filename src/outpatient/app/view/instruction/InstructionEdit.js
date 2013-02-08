Ext.define('Jss.Outpatient.view.instruction.InstructionEdit', {
    extend:'Ext.Container',
    alias:'widget.instruction-edit',

    config:{
        layout:'vbox',
        items:[
            {
                xtype : 'observationSummaryPanel',
                id:'instruction-observationSummaryPanel',
                store:'Instructions',
                menuOptions: [{displayText: 'Delete', tapEventName: 'delete', iconCls: 'trash'}],
                flex: 1,
            },
            {
                xtype:'addObservationPanel',
                id:'instruction-addObservationsPanel',
                scrollable:false,
                autoCompleteStore:'AllInstructions',
                autoCompleteItemTpl:'{name}',
                autoCompleteFilterKey:'name',
                flex:3,
            }
        ]
    }
});