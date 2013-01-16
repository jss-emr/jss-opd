Ext.define('Jss.Outpatient.controller.TreatmentAdviceController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
            treatmentSummaryPanel: '#treatmentSummaryPanel',
            drugAutocompletePanel:'#drugAutocompletePanel'
		},
		control: {
            treatmentSummaryPanel: {
                jsstouchstart: 'gotoEditPage'
            },
            drugAutocompletePanel: {
                itemSelected: 'onDrugSelection',
                clearicontap: 'clear',
            }
        },
	},

	clear: function() {
        Ext.getCmp('addTreatmentAdvice').clear();
	},

    onDrugSelection: function(record) {
        Ext.getCmp('addTreatmentAdvice').loadDetailsPanel(record);
        Ext.getCmp('addTreatmentAdviceButton').addListener('tap', this.onAddTreatmentAdvice, this);
    },

    onAddTreatmentAdvice: function() {
		var treatmentAdvice = Ext.getCmp('addTreatmentAdviceDetailsPanel').getTreatmentAdvice()
		Ext.getCmp('treatmentAdviceGrid').getStore().add(treatmentAdvice);

		Ext.getCmp('addTreatmentAdvice').clear();
        Ext.getCmp('drugAutocompletePanel').clear();
	},

    gotoEditPage: function() {
        Ext.getCmp('mainview').push(Ext.getCmp('treatmentEdit'));
    }
})


