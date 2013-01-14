Ext.define('Jss.Outpatient.controller.TreatmentAdviceController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			searchField: '#drugAutocompleteSearchField',
            treatmentSummaryPanel: '#treatmentSummaryPanel',
		},
		control: {
            treatmentSummaryPanel: {
                jsstouchstart: 'gotoEditPage'
            },
            searchField: {
				keyup: 'onSearchFieldKeyup',
				change: 'clearOnEmpty',
			}
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

	clearOnEmpty: function(textField, newValue, oldValue) {
		if(textField.getValue().length == 0) {
			Ext.getCmp('addTreatmentAdvice').clear();
		}
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

    gotoEditPage: function() {
        Ext.getCmp('mainview').push(Ext.getCmp('treatmentEdit'));
    }
})


