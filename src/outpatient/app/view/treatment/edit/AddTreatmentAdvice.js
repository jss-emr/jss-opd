Ext.define('Jss.Outpatient.view.treatment.edit.AddTreatmentAdvice', {
    extend:'Ext.Container',
    alias:"widget.addTreatmentAdvice",

    requires: ['Jss.Outpatient.view.treatment.edit.AddTreatmentAdviceDetailsPanel'],

    config:{
        layout:'vbox',
        scroll:'both',
    },

    initialize: function() {
        this.autoCompleteWidget = this.addAutoCompleteWidget();
        this.detailsPanel = this.addDetailsPanel();
    },

    addAutoCompleteWidget: function() {
        var widget = Ext.create('Jss.Outpatient.view.autocomplete.AutoCompleteWithFreeTextWidget', {
            height: 40,
            width: '30%',
            placeHolder:'Search...',
            store: 'MedicineDetails',
            category: this.config.autoCompleteCategory,
            itemTpl: '{name}',
            filterKey: 'name',
            style: 'margin: 0px auto; margin-bottom: 10px; z-index: 100;',

        });

        widget.on('itemSelected', this.onTreatmentAdviceSelection, this);
        widget.on('clearicontap', this.clear, this);

        this.add(widget);
        return widget;
    },

    addDetailsPanel: function() {
        var widget = Ext.create('Jss.Outpatient.view.treatment.edit.AddTreatmentAdviceDetailsPanel', {
            height: '100%'   ,
            bubbleEvents: ['medicineDetailsCaptured', 'deleteObservation'],
        });

        widget.on('medicineDetailsCaptured', this.clear, this);
        widget.on('deleteObservation', this.clear, this);
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
        return uiElement;
    },

    showForEdit: function(treatmentAdvice) {
        this.autoCompleteWidget.setConcept(treatmentAdvice);
        this.detailsPanel.clear();
        var uiElement = this.adviceUiElementMap[treatmentAdvice.get('name')];
        if (uiElement !== undefined) {
            this.detailsPanel.addUIElement(uiElement);
        } else {
            var uiElement = this.onTreatmentAdviceSelection(treatmentAdvice.get('medicineDetails'));
            if(uiElement != undefined) {
                this.adviceUiElementMap[treatmentAdvice.get('name')] = uiElement;
                uiElement.showForEdit(treatmentAdvice.get('properties'));
            }
        }
    },

    clear:function () {
        this.autoCompleteWidget.clear();
        this.detailsPanel.clear();
    },
});