Ext.define('Jss.Outpatient.view.treatment.new.ArraySelectionBox', {
	extend: 'Ext.List',
	alias : 'widget.arraySelectionBox',

	config: {
		height: 300,
		centered: true,
		itemTpl: '{value}',
	},

	addData: function(array) {
		this.setStore(Ext.create('Ext.data.Store', {
			data: array.map(function(element) { return {'value': element}; })
		}));

		this.refresh();
	},

	getSelectedValue: function() {
		var selectedValues = this.getSelection();
		if(selectedValues.length <= 0){
			return null;
		}
		return selectedValues[0].data.value;
	}

})