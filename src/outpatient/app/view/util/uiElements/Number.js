Ext.define('Jss.Outpatient.view.util.uiElements.Number', {
    extend: 'Ext.Container',

    config: {
    	height: 150,
    	width: '100%',
    },

    initialize: function() {
    },

    showFor: function(concept) {
    	this.numberField = Ext.create('Ext.field.Number', {
            name:"value",
            autoComplete: false,
    	});

    	this.add({
    		xtype: 'fieldset',
    		items: [this.numberField],
    	});

    	this.numberField.on('action', function(){this.fireEvent('valueCaptured', this.getValueAsString()); }, this);

    	return this;
    },

    getValueAsString: function() {
    	return this.numberField.getValue();
    }
});
