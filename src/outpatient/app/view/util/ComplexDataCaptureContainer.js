Ext.define('Jss.Outpatient.view.util.ComplexDataCaptureContainer', {
    extend: 'Ext.Container',
    alias : 'widget.complexDataCaptureContainer',

    requires: ['Jss.Outpatient.view.util.uiElements.Factory'],

    config: {
        layout: 'hbox',
        height: '100%',
        scrollable: false,
        width: '100%',
        cls: 'complexDataCaptureContainer',
    },

    initialize: function() {
        this.concepts = this.config.concepts;
        this.createConceptListColumn();
        this.createDetailsColumn();

        this.addConcepts();
        this.factory = new Jss.Outpatient.view.util.uiElements.Factory();
    },

    createConceptListColumn: function() {
        this.conceptListColumn = Ext.create('Ext.Container', {
            layout: 'vbox',
            scrollable: true,
            flex: 3,
        });

        this.add(this.conceptListColumn);
    },

    createDetailsColumn: function() {
        this.detailsColumn = Ext.create('Ext.Container', {
            layout: 'fit',
            flex: 2,
            style: 'margin-left: 10px',

        });

        this.add(this.detailsColumn);
    },

    addConcepts: function() {
        this.concepts.forEach(function(concept) {
            var rowContainer = Ext.create('Ext.Container', {
                layout: 'hbox',
                height: 50,
            });

            var conceptButton = Ext.create('Ext.Button', {
                text: concept.name,
                flex: 1,
                height: 50,
                cls: 'confirmationKeyButton',
            });

            var valueField = Ext.create('Ext.Label',{
                html: '',
                flex: 1,
                height: 50,
                cls: 'valueField',
            });

            var deleteButton = Ext.create('Ext.Button', {
                iconCls: 'delete',
                iconMask: true,
                ui: 'action',
                width: 50,
            });

            conceptButton.on('tap', function() { this.showDetails(concept, valueField, conceptButton)}, this);
            deleteButton.on('tap', function() { rowContainer.destroy() }, this);

            rowContainer.add([conceptButton, valueField, deleteButton]);
            this.conceptListColumn.add(rowContainer);

        }, this);
    },

    showDetails: function(concept, valueField, conceptButton) {
        this._setActiveButton(conceptButton);
        this.detailsColumn.removeAll(false);
        var uiElement = this.factory.get(concept);
        this.detailsColumn.add(uiElement);

        uiElement.on('valueCaptured', function(value) {valueField.setHtml("<div class='middle'>" + value + "</div>")}, this);
    },

    getDetails: function() {
        var details = {};
        this.concepts.forEach(function(concept) {
            details[concept.name] = this.factory.get(concept).getValueAsString();
        }, this);

        return details;
    },

    _setActiveButton: function(currentButton) {
        if(this.selectedButton) {
            this.selectedButton.setUi('');
        }
        this.selectedButton = currentButton;
        this.selectedButton.setUi('action');
    },
});