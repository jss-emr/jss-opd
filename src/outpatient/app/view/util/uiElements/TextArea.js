Ext.define('Jss.Outpatient.view.util.uiElements.TextArea', {
    extend: 'Ext.Container',

    config: {
    	height: 300,
    	width: '100%',
    	layout: 'vbox',
    },

    initialize: function() {
    },

    showFor: function(concept) {
    	this.textField = Ext.create('Ext.field.TextArea', {
    		name:"value",
            autoComplete: false,
		});

    	this.add({
    		xtype: 'fieldset',
    		flex: 1,
    		items: [this.textField],
    	});

    	this.addButton = Ext.create('Ext.Button', {
    		text: 'Add',
    		height: 50,
    		width: 100,
    	});

    	this.addButton.on('tap', function(){this.fireEvent('valueCaptured', this.getValueAsString()); }, this);
    	this.add(this.addButton);

    	return this;
    },

    getValueAsString: function() {
    	return this.textField.getValue();
    },
});