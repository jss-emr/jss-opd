Ext.define('Jss.Treatment.store.MedicineDetails', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Jss.Treatment.model.MedicineDetail',
		autoLoad: true,
		proxy: {
            type: 'ajax',
            url: 'data/medicineDetails.json'
		}
	}
});