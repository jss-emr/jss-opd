Ext.define('Jss.Outpatient.view.history.edit.ObservationsPanel', {
    extend:'Ext.dataview.List',
    alias:"widget.observationsPanel",

    config:{
        layout:'fit',
        id:'observationsPanel',
        scroll:'both',
        store:'Observations',
        inline:true,
        itemTpl: '{summary}'
    },

    addObservation : function(observation){
        this.getStore().add(observation);
    }
});