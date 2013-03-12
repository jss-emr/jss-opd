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
                flex: 1,
            },
            {
                xtype:'addObservationPanel',
                id:'instruction-addObservationsPanel',
                scrollable:false,
                autoCompleteStore:'AllInstructions',
                autoCompleteCategory: 'Instruction',
                autoCompleteItemTpl:'{name}',
                autoCompleteFilterKey:'name',
                autoCompletePlaceHolder: 'Add Instructions ..',
                flex:2,
            }
        ]
    }
});