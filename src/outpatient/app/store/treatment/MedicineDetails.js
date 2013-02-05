Ext.define('Jss.Outpatient.store.treatment.MedicineDetails', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Jss.Outpatient.model.treatment.MedicineDetail',
		proxy: {
			type: 'ajax',
			url: 'data/medicineDetails.json',
			noCache: false,
		}
	}
});