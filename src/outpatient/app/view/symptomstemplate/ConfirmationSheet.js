Ext.define('Jss.Outpatient.view.symptomstemplate.ConfirmationSheet', {
    extend: 'Ext.Sheet',

    config: {
        height: '80%',
        width: '80%',
        layout : 'vbox',
        hideOnMaskTap: true,
        showAnimation: 'fadeIn',
        hideAnimation: 'fadeOut',
        style: 'color: white',
        items: [{
            xtype: 'container',
            flex: 1,
            html: "Selecting this template will add following Observations - ",
        }],
    },

    initialize: function() {
        this.on('hide', function() { this.destroy()}, this);
    },

    for: function(template) {
        this.addDataRow(template);
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

        buttonRow.add(this.createButton("Add", "confirm", function(scope) { scope.fireEvent('add') }, this));
        buttonRow.add(this.createButton("Cancel", "decline", function(scope) { scope.destroy() }, this));

        this.add(buttonRow);
    },

    addDataRow: function(template) {
        var dataRow = Ext.create('Ext.Container', {
            layout: 'hbox',
            flex: 10,
        });

        dataRow.add(this.createList(template.get('sections').history));
        dataRow.add(this.createList(template.get('sections').examinations));
        dataRow.add(this.createList(template.get('sections').instructions));

        this.add(dataRow);
    },

    createList: function(data) {
        return Ext.create('Ext.dataview.DataView', {
            flex: 1,
            data: data,
            itemTpl: '{name}'
        });
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
});
