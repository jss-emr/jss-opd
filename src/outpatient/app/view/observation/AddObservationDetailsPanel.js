Ext.define('Jss.Outpatient.view.observation.AddObservationDetailsPanel', {
    extend:'Ext.Container',
    alias:"widget.addObservationDetailsPanel",

    config:{
        layout:'hbox',
        scroll:'both',
        bubbleEvents: 'observationDetailsCaptured'
    },

    initialize: function() {
        this.detailsPanel = this.addDetailsPanel();
        this.addButtonRow();
    },

    addButtonRow: function() {
        this.buttonRow = Ext.create('Ext.Container', {
            layout: 'vbox',
            width: '10%',
            docked: 'right',
            height: 200,
            items: [this.createAddButton(), this.createDeleteButton()]
        });

        this.add(this.buttonRow);
    },

    createAddButton: function() {
        this.addButton = Ext.create('Ext.Button', {
            html: 'Add',
            hidden: true,
            flex: 4,
            ui: 'confirm',
            style: 'margin-bottom: 10px',
        });

        this.addButton.on('tap', this.detailsCaptured, this);
        return this.addButton;
    },

    createDeleteButton: function() {
        this.deleteButton = Ext.create('Ext.Button', {
            html: 'Delete',
            hidden: true,
            flex: 1,
            ui: 'decline',
        });

        this.deleteButton.on('tap', this.deleteObservation, this);
        return this.deleteButton;
    },

    addDetailsPanel: function() {
        var widget = Ext.create('Ext.Container', {
            width: '100%',
            layout: 'fit',
            cls: 'observationDetailsPanel',
        });

        this.add(widget);
        return widget;
    },

    clear: function() {
        this.addButton.hide();
        this.deleteButton.hide();
        this.detailsPanel.removeAll(true);
    },

    addObservationUIElement: function(uiElement) {
        this.uiElement = uiElement;
        if(uiElement.isDefault()){
            this.detailsCaptured();
            return;
        }
        uiElement.on('detailsCaptured', this.detailsCaptured, this);
        this.detailsPanel.add([uiElement]);
        this.detailsPanel.show();
        this.addButton.show();
        this.deleteButton.show();
    },

    detailsCaptured: function() {
        this.fireEvent('observationDetailsCaptured', this.getObservationDetails());
    },

    deleteObservation: function() {
        this.fireEvent('observationDeleted', this.uiElement.concept);
    },

    getObservationDetails: function() {
        return this.uiElement.getValue();
    },

    setUIElementValueFrom: function(observation){
        this.uiElement.setValueFrom(observation)
    }
})