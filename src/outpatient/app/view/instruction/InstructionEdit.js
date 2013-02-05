Ext.define('Jss.Outpatient.view.instruction.InstructionEdit', {
    extend:'Ext.Container',
    alias:'widget.instruction-edit',

    config:{
        layout:'vbox',
        items:[
            {
                xtype:'list',
                id:'instruction-observationSummaryPanel',
                itemTpl:'{summary}',
                store:'Instructions',
                cls:'diagnosisSummary stripedList',
                flex:1,
                inline:true,
                scrollable:'vertical',
            },
            {
                xtype:'addObservationPanel',
                id:'instruction-addObservationsPanel',
                scrollable:false,
                autoCompleteStore:'AllInstructions',
                observationQueueStore:'InstructionsQueue',
                autoCompleteItemTpl:'{name}',
                autoCompleteFilterKey:'name',
                flex:3,
            }
        ]
    }

    });