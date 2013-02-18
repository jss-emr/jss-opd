Ext.define('Jss.Outpatient.store.treatment.MedicineDetails', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Jss.Outpatient.model.treatment.MedicineDetail',
		proxy: {
			type: 'ajax',
			url: 'http://localhost:8080/concept?name=der&category=Medicine',
			noCache: false,
		}
	}
});