Ext.define('Jss.Outpatient.Treatment.store.MedicineDetails', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Jss.Outpatient.Treatment.model.MedicineDetail',
		autoLoad: true,
		proxy: {
            type: 'ajax',
            url: 'data/medicineDetails.json'
		}
	}
});