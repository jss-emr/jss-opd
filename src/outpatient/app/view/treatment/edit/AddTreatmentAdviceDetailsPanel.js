Ext.define('Jss.Outpatient.view.treatment.edit.AddTreatmentAdviceDetailsPanel', {
    extend:'Ext.Container',
    alias:"widget.addTreatmentAdviceDetailsPanel",

    config:{
        layout:'hbox',
        scroll:'both',
    },

    initialize: function() {
        this.detailsPanel = this.addDetailsPanel();
        this.addButton = this.createAddButton();
    },

    createAddButton: function() {
        var button = Ext.create('Ext.Button', {
            html: 'Add',
            hidden: true,
            height: 50,
            width: '10%',
            style: 'margin-left: 10px'
        });

        button.on('tap', this.detailsCaptured, this);

        this.add(button);
        return button;
    },

    addDetailsPanel: function() {
        var widget = Ext.create('Ext.Container', {
            height: 300,
            width: '90%',
            layout: 'fit',
        });

        this.add(widget);
        return widget;
    },

    clear: function() {
        this.addButton.hide();
        this.detailsPanel.removeAll(true);
    },

    addUIElement: function(uiElement) {
        this.uiElement = uiElement;
        this.detailsPanel.add([uiElement]);
        this.detailsPanel.show();
        this.addButton.show();
    },

    detailsCaptured: function() {
        if(this.isValid()){
            this.fireEvent('medicineDetailsCaptured', this.getDetails());
        }
    },

    getDetails: function() {
        return this.uiElement.getValue();
    },

    isValid: function(){
        if(this.uiElement.isValid())
            return true;
        this.uiElement.highlightErrors();
        return false;
    }
});