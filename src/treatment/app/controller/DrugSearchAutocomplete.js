Ext.define('Jss.Outpatient.Treatment.controller.DrugSearchAutocomplete', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			searchField: '#drugAutocompleteSearchField',
		},

		control: {
			searchField: {
				keyup: 'onSearchFieldKeyup'
			},
		},

	},

	onSearchFieldKeyup : function(textField) {
		var keyword = textField.getValue();
		var drugAutocompletePanel = Ext.getCmp('drugAutocompletePanel');

		var listbox = drugAutocompletePanel.createListBox(keyword);

		listbox.on('drugSelected', function(drug){
			drugAutocompletePanel.setSearchFieldValue(drug.data.name);
			listbox.hide(); 
			this.onDrugSelection(drug);
		}, this)
	},

	onAddTreatmentAdvice: function() {
		var treatmentAdvice = Ext.getCmp('addTreatmentAdviceDetailsPanel').getTreatmentAdvice()
		Ext.getCmp('treatmentAdviceGrid').getStore().add(treatmentAdvice);

		Ext.getCmp('addTreatmentAdvice').clear();
	},

	onDrugSelection: function(drug) {
		var treatmentAdviceDetailsPanel = Ext.getCmp('addTreatmentAdvice').loadDetailsPanel(drug);
		Ext.getCmp('addTreatmentAdviceButton').addListener('tap', this.onAddTreatmentAdvice, this);
	},

})


