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
                listeners:{
                    itemtaphold:function (list, index, target, record) {
                        Ext.create('Ext.Panel', {
                            id:'optionsPanel',
                            left:0,
                            padding:10,
                            hideOnMaskTap:true,
                            modal:true,
                            showAnimation:'fadeIn',
                            layout:{
                                type:'hbox',
                                align:'middle'
                            },
                            items:[
                                {
                                    xtype:'button',
                                    id:'listItemEdit',
                                    iconCls:'compose',
                                    iconMask:true,
                                    padding:10,
                                    listeners:{
                                        tap:function(){
                                            console.log("edit button tap");
                                        }
                                    }
                                },
                                {
                                    xtype:'button',
                                    id:'listItemDelete',
                                    iconCls:'trash',
                                    iconMask:true,
                                    padding:10,
                                    listeners: {
                                        tap:function(){
                                            Ext.getCmp('instruction-observationSummaryPanel').getStore().remove(record);
                                            Ext.getCmp('optionsPanel').hide(true);
                                        }
                                    }
                                }
                            ]
                        }).showBy(target);
                    }
                }
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
    },


});