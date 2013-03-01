Ext.define('Jss.Outpatient.view.util.uiElements.TextArea', {
    extend: 'Ext.Container',

    config: {
    	height: 150,
    	width: '100%',
    },

    initialize: function() {
    },

    showFor: function(concept) {
    	this.textField = Ext.create('Ext.field.TextArea', {
    		name:"value",
            autoComplete: false,
            minRow: 4,
		});

    	this.add({
    		xtype: 'fieldset',
    		items: [this.textField],
    	});

    	this.textField.on('action', function(){this.fireEvent('valueCaptured', this.getValueAsString()); }, this);
    	return this;
    },

    getValueAsString: function() {
    	return this.textField.getValue();
    }
});