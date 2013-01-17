Ext.define('Jss.Outpatient.view.history.edit.AddObservationPanel', {
    extend:'Ext.Container',
    alias:"widget.addObservationPanel",

    config:{
        layout:'hbox',
        scroll:'both',
        items:[
            {
                xtype: 'autoComplete',
                id: 'observationAutoComplete',
                placeHolder: 'Search...',
                width: '30%',
                store: 'Concepts',
                itemTpl: '{name}',
                filterKey: 'name'
            },{
                xtype: 'addObservationDetailsPanel',
                id: 'addObservationDetailsPanel',
                width: '70%'
            }
        ]
    },

    clear: function(){
        Ext.getCmp('observationAutoComplete').clear();
        Ext.getCmp('addObservationDetailsPanel').clear();
    }
})