Ext.define('Jss.Outpatient.view.observation.AddObservationDetailsPanel', {
    extend:'Ext.Container',
    alias:"widget.addObservationDetailsPanel",

    config:{
        layout:'vbox',
        scroll:'both',
        bubbleEvents: 'observationDetailsCaptured'
    },

    initialize: function() {
        this.detailsPanel = this.addDetailsPanel();
        this.addButton = this.createAddButton();
    },

    createAddButton: function() {
        var button = Ext.create('Ext.Button', {
            html: 'Add',
            hidden: true,
            flex: 1,
            width: '100%',
            style: 'margin-left: 10px'
        });

        button.on('tap', this.detailsCaptured, this);

        this.add(button);
        return button;
    },

    addDetailsPanel: function() {
        var widget = Ext.create('Ext.Container', {
            flex: 15,
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
    },

    setUIElementValueFrom: function(observation){
        this.uiElement.setValueFrom(observation)
    }
})