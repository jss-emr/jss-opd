Ext.define('Jss.Outpatient.view.treatment.edit.AddTreatmentAdvice', {
    extend:'Ext.Container',
    alias:"widget.addTreatmentAdvice",

    requires: ['Jss.Outpatient.view.treatment.edit.AddTreatmentAdviceDetailsPanel'],

    config:{
        layout:'hbox',
        scroll:'both',
    },

    initialize: function() {
        this.autoCompleteWidget = this.addAutoCompleteWidget();
        this.detailsPanel = this.addDetailsPanel();
    },

    addAutoCompleteWidget: function() {
        var widget = Ext.create('Jss.Outpatient.view.autocomplete.AutoCompleteWidget', {
            placeHolder:'Search...',
            width:'30%',
            store: 'MedicineDetails',
            itemTpl: '{name}',
            filterKey: 'name',
        });

        widget.on('itemSelected', this.onTreatmentAdviceSelection, this);
        widget.on('clearicontap', this.clear, this);

        this.add(widget);
        return widget;
    },

    addDetailsPanel: function() {
        var widget = Ext.create('Jss.Outpatient.view.treatment.edit.AddTreatmentAdviceDetailsPanel', {
            width:'70%',
            bubbleEvents: 'medicineDetailsCaptured',
        });

        widget.on('medicineDetailsCaptured', this.clear, this);

        this.add(widget);
        return widget;
    },

    onTreatmentAdviceSelection: function (medicineDetails) {
        this.detailsPanel.clear();
        var factory = Ext.create('Jss.Outpatient.view.treatment.uielements.Factory');
        var uiElement = factory.get(medicineDetails);
        if (uiElement !== undefined) {
            this.detailsPanel.addUIElement(uiElement);
        }
    },

    clear:function () {
        this.autoCompleteWidget.clear();
        this.detailsPanel.clear();
    },
});