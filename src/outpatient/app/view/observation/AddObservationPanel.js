Ext.define('Jss.Outpatient.view.observation.AddObservationPanel', {
    extend:'Ext.Container',
    alias:"widget.addObservationPanel",

    requires: ['Jss.Outpatient.view.observation.AddObservationDetailsPanel'],

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
            xtype:'autoComplete',
            placeHolder:'Search...',
            width:'30%',
            store: this.config.autoCompleteStore,
            itemTpl: this.config.autoCompleteItemTpl,
            filterKey: this.config.autoCompleteFilterKey,
        });

        widget.on('itemSelected', this.onConceptSelection, this);
        widget.on('clearicontap', this.clear, this);

        this.add(widget);
        return widget;
    },

    addDetailsPanel: function() {
        var widget = Ext.create('Jss.Outpatient.view.observation.AddObservationDetailsPanel', {
            width:'70%',
            height: 300,
            bubbleEvents: 'observationDetailsCaptured',
        });

        widget.on('observationDetailsCaptured', this.clear, this);

        this.add(widget);
        return widget;
    },

    onConceptSelection: function (concept) {
        this.detailsPanel.clear();
        var factory = Ext.create('Jss.Outpatient.view.concept.UIElementFactory');
        var uiElement = factory.get(concept.data);
        if (uiElement !== undefined) {
            this.detailsPanel.addObservationUIElement(uiElement);
        }
    },

    clear:function () {
        this.autoCompleteWidget.clear();
        this.detailsPanel.clear();
    },
});