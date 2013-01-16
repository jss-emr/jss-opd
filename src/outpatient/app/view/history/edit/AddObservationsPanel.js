Ext.define('Jss.Outpatient.view.history.edit.AddObservationsPanel', {
    extend:'Ext.Container',
    alias:"widget.addObservationsPanel",

    config:{
        layout:'fit',
        scroll:'both',
        items:[
            {
                xtype:'fieldset',
                height: 50,
                items:[
                    {
                        xtype:'selectfield',
                        id: 'conceptSelectionField',
                        store:'Concepts',
                        displayField:'name',
                        label:'select concept',
                    }
                ],
            }
        ]
    },
})