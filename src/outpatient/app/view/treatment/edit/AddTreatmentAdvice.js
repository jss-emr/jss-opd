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
        var widget = Ext.create('Jss.Outpatient.view.autocomplete.AutoCompleteWithFreeTextWidget', {
            placeHolder:'Search...',
            width:'30%',
            store: 'MedicineDetails',
            itemTpl: '{name}',
            filterKey: 'name',
            category: this.config.autoCompleteCategory,
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
        this.adviceUiElementMap = {};
        widget.setAdviceUiElementMapping(this.adviceUiElementMap);

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

    showForEdit: function(treatmentAdvice) {
        this.autoCompleteWidget.setConcept(treatmentAdvice);
        this.detailsPanel.clear();
        var uiElement = this.adviceUiElementMap[treatmentAdvice.get('name')];
        if (uiElement !== undefined) {
            this.detailsPanel.addUIElement(uiElement);
        } else {
            this.onTreatmentAdviceSelection(treatmentAdvice.get('medicineDetails'));
        }
    },

    clear:function () {
        this.autoCompleteWidget.clear();
        this.detailsPanel.clear();
    },
});