Ext.define('Jss.Outpatient.view.util.uiElements.Coded', {
    extend: 'Ext.Container',

    config: {
    	height: 300,
    	width: '100%',
    	layout: 'fit',
    },

    initialize: function() {
    },

    showFor: function(concept) {
    	this.list = new Jss.Outpatient.view.util.ArraySelectionBox({width: '90%'});
    	this.list.addData(concept.properties.values);

    	this.add(this.list);

        this.list.on('select', function(){this.fireEvent('valueCaptured', this.getValueAsString()); }, this);
        this.list.on('deselect', function(){this.fireEvent('valueCaptured', this.getValueAsString()); }, this);

    	return this;
    },

    getValueAsString: function() {
    	return this.list.getSelectedValue();
    }
});