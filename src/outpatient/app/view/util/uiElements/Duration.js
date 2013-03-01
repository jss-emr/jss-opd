Ext.define('Jss.Outpatient.view.util.uiElements.Duration', {
    extend: 'Ext.Container',

    config: {
    	layout: 'vbox',
    	height: '100%',
    	width: '100%',
    },

    initialize: function() {
    },

    showFor: function(concept) {
    	this.quantityList = new Jss.Outpatient.view.util.ArraySelectionBox({
    		width: '90%'
    	}).addData(this._quantityArray());
    	this.unitsList = new Jss.Outpatient.view.util.ArraySelectionBox({
    		width: '90%'
    	}).addData(["Minutes", "Hours", "Days", "Weeks", "Months", "Years"]);

    	this.add([
            {
                xtype: 'panel',
                width: '50%',
                flex: 2,
                items: [this.quantityList, {xtype: 'titlebar', title: "Quantity", docked: 'top'}]
            },
            {
                xtype: 'panel',
                width: '50%',
                flex: 1,
                items: [this.unitsList, {xtype: 'titlebar', title: "Unit", docked: 'top'}]
            }
        ]);
    	this.addObservations();
    	return this;
    },

    getValueAsString: function() {
    	return this.quantityList.getSelectedValue() + " " + this.unitsList.getSelectedValue();
    },

    addObservations: function() {
    	this.quantityList.on('select', this.raiseValueCaptured, this);
    	this.quantityList.on('deselect', this.raiseValueCaptured, this);
    	this.unitsList.on('select', this.raiseValueCaptured, this);
    	this.unitsList.on('deselect', this.raiseValueCaptured, this);
    },

    raiseValueCaptured: function() {
    	if(this.quantityList.getSelectedValue() != null && this.unitsList.getSelectedValue() != null)
    		this.fireEvent('valueCaptured', this.getValueAsString());
    	else
    		this.fireEvent('valueCaptured', "");
    },

    _quantityArray: function() {
    	var values = []
    	for(var i = 1; i <= 60; i++)
    		values.push(i)
    	return values
    }
});