Ext.define('Jss.Treatment.controller.DrugSearchAutocomplete', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			addTreatmentAdvice: '#addTreatmentAdvice',
			drugAutocompletePanel: '#drugAutocompletePanel',
			searchField: '#drugAutocompleteSearchField'
		},

		control: {
			searchField: {
				keyup: function(textField) {
					var keyword = textField.getValue();
					var drugAutocompletePanel = Ext.getCmp('drugAutocompletePanel');

					// drugAutocompletePanel.removeListBox();

					var listbox = drugAutocompletePanel.createListBox(keyword);

					listbox.on('drugSelected', function(drug){
						drugAutocompletePanel.setSearchFieldValue(drug.data.name);
						listbox.hide(); 
					}, this)

				}
			}
		}
	},

})


