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
		this.getTreatmentEditSummaryPanel().getStore().add(treatmentAdvice);
	},

    gotoEditPage: function() {
        Ext.getCmp('mainview').push(Ext.getCmp('treatment-card'));
    }
});


