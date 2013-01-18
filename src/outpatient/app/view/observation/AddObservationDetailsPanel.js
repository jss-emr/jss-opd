Ext.define('Jss.Outpatient.view.observation.AddObservationDetailsPanel', {
    extend:'Ext.Container',
    alias:"widget.addObservationDetailsPanel",

    config:{
        layout:'vbox',
        scroll:'both',
    },

    initialize: function() {
        this.addButton = this.createAddButton();
        this.detailsPanel = this.addDetailsPanel();
    },

    createAddButton: function() {
        var button = Ext.create('Ext.Button', {
            xtype: 'button',
            html: 'Add',
            hidden: true,
            height: 50,
            width: 100,
            style: 'margin-left: 10px'
        });

        button.on('tap', this.detailsCaptured, this);

        this.add(button);
        return button;
    },

    addDetailsPanel: function() {
        var widget = Ext.create('Ext.Container', {
            height: 300,
            width: '100%',
            layout: 'fit',
        });

        this.add(widget);
        return widget;
    },

    clear: function() {
        this.addButton.hide();
        this.detailsPanel.removeAll(true);
    },

    addObservationUIElement: function(uiElement) {
        this.uiElement = uiElement;
        this.detailsPanel.add([uiElement]);
        this.detailsPanel.show();
        this.addButton.show();
    },

    detailsCaptured: function() {
        if(this.isValid()){
            this.fireEvent('observationDetailsCaptured', this.getObservationDetails());
        }
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