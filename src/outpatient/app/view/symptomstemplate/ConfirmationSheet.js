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
    },

    for: function(template) {
        this.template = template;
        this.addDataRow();
        this.addButtonsRow();
        return this;
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

        buttonRow.add(this.createButton("Add Template", "confirm", function(scope) { scope.fireEvent('add', scope.conceptUIElementMap) }, this));
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
            flex: 3,
            scrollable: true,
        });

        this.detailsPanel = Ext.create('Ext.Container', {
            flex: 2,
            layout: 'fit',
            style: 'margin-left: 5px;',
        });

        dataRow.add(this.keyValueColumn);
        dataRow.add(this.detailsPanel);


        this.addConcepts('history');
        this.addConcepts('examinations');
        this.addConcepts('instructions');

        this.add(dataRow);
    },

    addConcepts: function(section) {
        this.template.get('sections')[section].forEach(function(concept) {
            this.addKey(concept, section);
        }, this);
    },

    addKey: function(concept, section) {
        var rowContainer = Ext.create('Ext.Container',{
            scrollable: false,
            layout: 'hbox',
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

        var valueField = Ext.create('Ext.Label',{
            html: '',
            flex: 1,
            style: 'margin-left: 5px; border-bottom: 1px dashed white;',
        });

        rowContainer.add([keyButton, valueField, deleteButton]);

        var factory = Ext.create('Jss.Outpatient.view.concept.UIElementFactory');
        var uiElement = factory.get(new Jss.Outpatient.model.concept.Concept(concept));
        if (uiElement !== undefined) {
            this.conceptUIElementMap[concept.name] = uiElement;
            if(uiElement.isDefault()) {
                valueField.setHtml(uiElement.getValueAsString());
            }
        }

        keyButton.on('tap', function(){this.showDetailsPanel(concept, keyButton, valueField)}, this);
        deleteButton.on('tap', function(){this.deleteRow(concept, section, rowContainer)}, this);
        this.keyValueColumn.add(rowContainer);
    },

    showDetailsPanel: function(concept, keyButton, valueField){
        this.detailsPanel.removeAll(false);
        if(this.selectedButton) {
            this.selectedButton.setUi('');
        }
        this.selectedButton = keyButton;
        this.selectedButton.setUi('action');
        var uiElement = this.conceptUIElementMap[concept.name]
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
