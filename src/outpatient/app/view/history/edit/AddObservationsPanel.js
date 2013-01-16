Ext.define('Jss.Outpatient.view.history.edit.AddObservationsPanel', {
    extend:'Ext.Container',
    alias:"widget.addObservationsPanel",

    config:{
        layout:'fit',
        id:'addObservationsPanel',
        scroll:'both',
        items:[
            {
                xtype:'fieldset',
                height: 50,
                items:[
                    {
                        xtype:'selectfield',
                        store:'Concepts',
                        displayField:'name',
                        label:'select concept',
                    }
                ],
            }
        ]
    },
})