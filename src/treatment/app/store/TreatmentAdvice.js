Ext.define('Jss.Treatment.store.TreatmentAdvice', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Jss.Treatment.model.TreatmentAdvice',
		// data : [
		// 	{medicine : 1, mg: 3},
		// 	{medicine : 3, mg: 3},
		// 	{medicine : 2, mg: 3},
		// ],
		autoLoad: true,
		proxy: {
            type: 'ajax',
            url: 'data/medicineList.json'
		}
	}

});