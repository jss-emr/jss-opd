Ext.define('Jss.Outpatient.view.treatment.edit.AddTreatmentAdviceDetailsPanel', {
    extend:'Ext.Container',
    alias:"widget.addTreatmentAdviceDetailsPanel",

    config:{
        layout:'hbox',
        scroll:'both',
    },

    initialize: function() {
        this.detailsPanel = this.addDetailsPanel();
        this.addButtonRow();
    },

    setAdviceUiElementMapping: function(mapping) {
        this.adviceUiElementMap = mapping;
    },

    addButtonRow: function() {
        this.add({
            xtype: 'container',
            layout: 'vbox',
            width: '10%',
            height: 200,
            docked: 'right',
            items: [this.createAddButton(), this.createDeleteButton()],
        })
    },

    createAddButton: function() {
        this.addButton = Ext.create('Ext.Button', {
            html: 'Add',
            hidden: true,
            ui: 'confirm',
            flex: 4,
            style: 'margin-bottom: 10px',
        });

        this.addButton.on('tap', this.detailsCaptured, this);
        return this.addButton;
    },

    createDeleteButton: function() {
        this.deleteButton = Ext.create('Ext.Button', {
            html: 'Remove',
            hidden: true,
            ui: 'decline',
            flex: 1,
        });

        this.deleteButton.on('tap', function() {this.fireEvent('deleteObservation') }, this);
        return this.deleteButton;
    },

    addDetailsPanel: function() {
        var widget = Ext.create('Ext.Container', {
            width: '95%',
            height: '100%',
            layout: 'fit',
            cls: 'treatmentAdviceUIElements',
        });

        this.add(widget);
        return widget;
    },

    clear: function() {
        this.addButton.hide();
        this.deleteButton.hide();
        this.detailsPanel.removeAll(false);
    },

    addUIElement: function(uiElement) {
        this.uiElement = uiElement;
        if(this.uiElement.isDefault()) {
            this.detailsCaptured();
            return;
        }
        this.detailsPanel.add([uiElement]);
        this.detailsPanel.show();
        this.addButton.show();
        this.deleteButton.show();
    },

    detailsCaptured: function() {
        this.adviceUiElementMap[this.uiElement.getMedicineDetailsName()] = this.uiElement;
        this.fireEvent('medicineDetailsCaptured', this.getDetails());
    },

    getDetails: function() {
        return this.uiElement.getValue();
    },
});