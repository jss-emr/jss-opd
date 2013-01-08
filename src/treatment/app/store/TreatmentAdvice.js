Ext.define('Jss.Treatment.store.TreatmentAdvice', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Jss.Treatment.model.TreatmentAdvice',
		autoLoad: true,
		proxy: {
            type: 'ajax',
            url: 'data/medicineList.json'
		}
	}

});