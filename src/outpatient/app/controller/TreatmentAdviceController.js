Ext.define('Jss.Outpatient.controller.TreatmentAdviceController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
            treatmentSummaryPanel: '#treatmentSummaryPanel',
            treatmentEditSummaryPanel: '#treatmentEditSummaryPanel',
            addTreatmentAdvicePanel:'#addTreatmentAdvicePanel'
		},
		control: {
            treatmentSummaryPanel: {
                containerDoubleTab: 'gotoEditPage'
            },
            addTreatmentAdvicePanel: {
                medicineDetailsCaptured: 'addTreatmentAdvice',
            }
        },
	},

    addTreatmentAdvice: function(treatmentAdvice) {
        var summaryStore = this.getTreatmentEditSummaryPanel().getStore();
        var existingAdvice = summaryStore.findRecord('name', treatmentAdvice.get('name'));
        if(existingAdvice) {
            existingAdvice.set('properties', treatmentAdvice.get('properties'));
            existingAdvice.set('summary', treatmentAdvice.get('summary'));
            return;
        }

		summaryStore.add(treatmentAdvice);
	},

    gotoEditPage: function() {
        Ext.getCmp('mainview').push(Ext.getCmp('treatment-card'));
    }
});


