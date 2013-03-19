Ext.define('Jss.Outpatient.view.observation.AddObservationPanel', {
    extend:'Ext.Container',
    alias:"widget.addObservationPanel",

    requires: [
        'Jss.Outpatient.view.observation.AddObservationDetailsPanel',
    ],

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
            height: 50,
            width: '50%',
            placeHolder: this.config.autoCompletePlaceHolder,
            store: this.config.autoCompleteStore,
            category: this.config.autoCompleteCategory,
            itemTpl: this.config.autoCompleteItemTpl,
            filterKey: this.config.autoCompleteFilterKey,
            style: 'margin: 0px auto; margin-bottom: 10px; z-index: 100; font-size: 100%;',
        });

        widget.on('itemSelected', this.onConceptSelection, this);
        widget.on('clearicontap', this.clear, this);

        this.add(widget);
        return widget;
    },

    addDetailsPanel: function() {
        var widget = Ext.create('Jss.Outpatient.view.observation.AddObservationDetailsPanel', {
            width:'100%',
            height: '100%',
            bubbleEvents: 'observationDetailsCaptured',
        });

        widget.on('observationDetailsCaptured', this.onDetailsCaptured, this);
        widget.on('observationDeleted', this.onObservationDeletion, this);

        this.add(widget);
        return widget;
    },

    onConceptSelection: function (concept) {
        this.detailsPanel.clear();
        var factory = Ext.create('Jss.Outpatient.view.concept.UIElementFactory');
        var uiElement = factory.get(concept);
        if (uiElement !== undefined) {
            this.detailsPanel.addObservationUIElement(uiElement);
        }
    },

    onObservationDeletion: function(concept) {
        this.clear();
        this.fireEvent('observationDeleted', concept);
    },

    onDetailsCaptured: function(observation) {
        this.clear();
    },

    clear:function () {
        this.autoCompleteWidget.clear();
        this.detailsPanel.clear();
    },

    showForEdit:function(observation){
        this.autoCompleteWidget.setConcept(observation);
        this.addConceptWithValue(observation)
    },

    addConceptWithValue:function(observation){
        this.detailsPanel.clear();
        var factory = Ext.create('Jss.Outpatient.view.concept.UIElementFactory');
        var uiElement = factory.get(observation.data.concept);
        if (uiElement !== undefined) {
            this.detailsPanel.addObservationUIElement(uiElement);
            this.detailsPanel.setUIElementValueFrom(observation);
        }
    }
});