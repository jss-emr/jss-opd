Ext.define('Jss.Outpatient.view.observation.AddObservationPanel', {
    extend:'Ext.Container',
    alias:"widget.addObservationPanel",

    requires: [
        'Jss.Outpatient.view.observation.AddObservationDetailsPanel',
        'Jss.Outpatient.view.observation.ObservationQueue'
    ],

    config:{
        layout:'hbox',
        scroll:'both',
    },

    initialize: function() {
        this.addAutocompleteAndObservationQueue();
        this.detailsPanel = this.addDetailsPanel();
    },

    createAutoCompleteWidget: function() {
        var widget = Ext.create('Jss.Outpatient.view.autocomplete.AutoCompleteWidget', {
            placeHolder:'Search...',
            store: this.config.autoCompleteStore,
            itemTpl: this.config.autoCompleteItemTpl,
            filterKey: this.config.autoCompleteFilterKey,
        });

        widget.on('itemSelected', this.onConceptSelection, this);
        widget.on('clearicontap', this.clear, this);

        return widget;
    },

    createObservationQueuePanel: function() {
        var widget = Ext.create('Jss.Outpatient.view.observation.ObservationQueue', {
            store: this.config.observationQueueStore,
            itemTpl: this.config.autoCompleteItemTpl,
            width: '100%',
        });

        widget.on('queueItemSelected', this.onConceptSelection, this);

        return widget;
    },

    addAutocompleteAndObservationQueue: function() {
        this.autoCompleteWidget = this.createAutoCompleteWidget();
        this.observationQueue = this.createObservationQueuePanel();

        this.add({
            xtype: 'container',
            width: '30%',
            layout: 'vbox',
            items : [this.autoCompleteWidget, this.observationQueue],
        })
    },

    addDetailsPanel: function() {
        var widget = Ext.create('Jss.Outpatient.view.observation.AddObservationDetailsPanel', {
            width:'70%',
            bubbleEvents: 'observationDetailsCaptured',
        });

        widget.on('observationDetailsCaptured', this.onDetailsCaptured, this);

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

    onDetailsCaptured: function(observation) {
        this.observationQueue.removeData('id', observation.get('concept').get('id'));
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