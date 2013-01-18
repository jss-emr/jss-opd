Ext.define('Jss.Outpatient.view.history.edit.AddObservationDetailsPanel', {
    extend:'Ext.Container',
    alias:"widget.addObservationDetailsPanel",

    config:{
        layout:'vbox',
        scroll:'both',
        items:[
            {
                xtype: 'button',
                id: 'addObservationButton',
                html: 'Add',
                hidden: true,
                height: 50,
                width: 100,
                style: 'margin-left: 10px'
            },{
                xtype: 'container',
                height: 300,
                width: '100%',
                id: 'observationDetailsPanel',
                layout: 'fit',
            }
        ]
    },

    clear: function() {
        Ext.getCmp('addObservationButton').hide();
        Ext.getCmp('observationDetailsPanel').removeAll(true);
    },

    addObservationDetails: function(uiElement) {
        this.uiElement = uiElement;
        Ext.getCmp('observationDetailsPanel').add([uiElement]);
        Ext.getCmp('addObservationButton').show();
    },

    getObservationDetails: function() {
        return this.uiElement.getValue();
    },

    isValid: function(){
        if(this.uiElement.isValid())
            return true;
        this.uiElement.highlightErrors();
        return false;
    }
})