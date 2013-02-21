Ext.define('Jss.Outpatient.view.treatment.edit.AddTreatmentAdviceDetailsPanel', {
    extend:'Ext.Container',
    alias:"widget.addTreatmentAdviceDetailsPanel",

    config:{
        layout:'vbox',
        scroll:'both',
    },

    initialize: function() {
        this.detailsPanel = this.addDetailsPanel();
        this.addButton = this.createAddButton();
    },

    setAdviceUiElementMapping: function(mapping) {
        this.adviceUiElementMap = mapping;
    },

    createAddButton: function() {
        var button = Ext.create('Ext.Button', {
            html: 'Add',
            hidden: true,
            flex: 1,
            width: '100%',
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
            cls: 'treatmentAdviceUIElements',
        });

        this.add(widget);
        return widget;
    },

    clear: function() {
        this.addButton.hide();
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
    },

    detailsCaptured: function() {
        this.adviceUiElementMap[this.uiElement.getMedicineDetailsName()] = this.uiElement;
        this.fireEvent('medicineDetailsCaptured', this.getDetails());
    },

    getDetails: function() {
        return this.uiElement.getValue();
    },
});