Ext.define('Jss.Outpatient.view.symptomstemplate.ConfirmationSheet', {
    extend: 'Ext.Sheet',

    config: {
        height: '100%',
        width: '100%',
        layout : 'vbox',
        hideOnMaskTap: true,
        showAnimation: 'fadeIn',
        hideAnimation: 'fadeOut',
    },

    initialize: function() {
        this.on('hide', function() { this.destroy()}, this);
        this.conceptUIElementMap = {};
        this.keyValueElements = [];
    },

    showFor: function(template) {
        this.template = template;
        var backgroundTask = new Ext.util.DelayedTask(this.addElements, this);
        backgroundTask.delay(1);

        // this.addElements()
        return this;
    },

    addElements: function() {
        this.addDataRow();
        this.addButtonsRow();

        var backgroundTask = new Ext.util.DelayedTask(this.backgroundJob, this);
        backgroundTask.delay(100);

        // this.backgroundJob();
    },

    addButtonsRow: function() {
        var buttonRow = Ext.create('Ext.Container', {
            layout: 'hbox',
            flex: 1,
            items: [{
                xtype: 'spacer',
                width: '30%',
            }]
        });

        buttonRow.add(this.createButton("Add Template", "confirm", function(scope) { scope.fireEvent('addTemplate', scope.conceptUIElementMap) }, this));
        buttonRow.add(this.createButton("Cancel", "decline", function(scope) { scope.fireEvent('cancel'); scope.destroy(); }, this));

        this.add(buttonRow);
    },

    addDataRow: function() {
        var self = this;
        var dataRow = Ext.create('Ext.Container', {
            layout: 'hbox',
            flex: 10,
            scrollable: false,
        });

        this.keyValueColumn = Ext.create('Ext.Container', {
            layout: 'vbox',
            flex: 3,
            scrollable: true,
        });

        this.detailsPanel = Ext.create('Ext.Container', {
            flex: 2,
            style: 'margin-left: 5px;',

        });

        dataRow.add(this.keyValueColumn);
        dataRow.add(this.detailsPanel);

        this.addConcepts('history');
        this.addConcepts('examinations');
        this.addConcepts('instructions');
        this.addConcepts('treatment');

        this.add(dataRow);
    },

    addConcepts: function(section) {
        this.template.get('sections')[section].forEach(function(concept) {
            this.addKey(concept, section)
        }, this);
    },

    addKey: function(concept, section) {
        var rowContainer = Ext.create('Ext.Container',{
            scrollable: false,
            layout: 'hbox',
            height: 50,
            style: 'margin-bottom: 2px; color: white;'
        });

        var keyButton = Ext.create('Ext.Button', {
            text: concept.name,
            flex: 1,
            cls: 'confirmationKeyButton'
        });

        var deleteButton = Ext.create('Ext.Button', {
            iconCls: 'delete',
            iconMask: true,
            ui: 'action',
            width: 50,
        });

        var valueField = Ext.create('Jss.Outpatient.view.util.TouchableLabel',{
            html: '',
            flex: 1,
            style: 'margin-left: 5px; border-bottom: 1px dashed white;',
        });

        this.keyValueElements.push({
            concept: concept,
            keyButton: keyButton,
            valueField: valueField,
        });

        keyButton.on('tap', function(){this.showDetailsPanel(concept, keyButton, valueField)}, this);
        valueField.on('labelTap', function(){this.showDetailsPanel(concept, keyButton, valueField)}, this);
        deleteButton.on('tap', function(){this.deleteRow(concept, section, rowContainer)}, this);

        rowContainer.add([deleteButton, keyButton, valueField]);
        this.keyValueColumn.add(rowContainer);
    },

    backgroundJob: function() {
        var factory = Ext.create('Jss.Outpatient.view.concept.UIElementFactory');
        this.keyValueElements.forEach(function(elem) {
            var conceptModel = new Jss.Outpatient.model.concept.Concept(elem.concept);
            if(conceptModel.getDatatype() != "treatmentadvice") {
                var uiElement = factory.getObject(conceptModel);
                if(uiElement != undefined && uiElement.isDefault()) {
                    elem.valueField.setHtml(uiElement.getValueAsString());
                }
            } else {
                elem.keyButton.setDisabled(true);
                elem.valueField.setHtml(elem.concept.properties.shortSummary || "Fill details in section");
            }
        }, this)
    },

    associateWithUiElement: function(conceptModel) {
        var factory = Ext.create('Jss.Outpatient.view.concept.UIElementFactory');
        var uiElement = factory.get(conceptModel);
        if (uiElement !== undefined) {
            this.conceptUIElementMap[conceptModel.get('name')] = uiElement;
        }
        return uiElement;
    },

    showDetailsPanel: function(concept, keyButton, valueField){
        var conceptModel = new Jss.Outpatient.model.concept.Concept(concept);

        this.detailsPanel.removeAll(false);
        if(this.selectedButton) {
            this.selectedButton.setUi('');
        }
        this.selectedButton = keyButton;
        this.selectedButton.setUi('action');
        var uiElement = this.conceptUIElementMap[concept.name]
        if(uiElement == undefined) {
            uiElement = this.associateWithUiElement(conceptModel);
        }
        if (uiElement !== undefined) {
            uiElement.on('valueCaptured', function(value) { valueField.setHtml(value)}, this);
            this.detailsPanel.add(uiElement);
        }
    },

    createButton: function(name, ui, handler, scope) {
        return Ext.create('Ext.Button', {
            width: '20%',
            text: name,
            ui: ui,
            listeners: {
                tap: function() { handler(scope) }
            }
        });
    },

    deleteRow : function(concept, section, rowContainer){
        rowContainer.destroy();
        this.template.get('sections')[section] = this.template.get('sections')[section].filter(function(elem) { return elem.name != concept.name; })
    },
});
