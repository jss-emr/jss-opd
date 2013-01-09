Ext.define('Jss.Outpatient.store.treatment.MedicineDetails', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Jss.Outpatient.model.treatment.MedicineDetail',
		autoLoad: true,
		proxy: {
            type: 'ajax',
            url: 'data/medicineDetails.json'
		}
	}
});