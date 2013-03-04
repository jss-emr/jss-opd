Ext.define('Jss.Outpatient.view.util.uiElements.Text', {
    extend: 'Ext.Container',

    config: {
    	height: 150,
    	width: '100%',
    },

    initialize: function() {
    },

    showFor: function(concept) {
    	this.textField = Ext.create('Ext.field.Text', {
    		name:"value",
            autoComplete: false,
		});

    	this.add({
    		xtype: 'fieldset',
    		items: [this.textField],
    	});

    	this.textField.on('action', function(){this.fireEvent('valueCaptured', this.getValueAsString()); }, this);
    	return this;
    },

    getValueAsString: function() {
        var value = this.textField.getValue();
        if(value == "")
            return null;
    	return value;
    }
});
