Ext.define('Jss.Outpatient.model.treatment.MedicineDetail', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{name: "name"},
			{name: "type"},
			{name: "specs", type: "auto"},
			{name: "instructions", type: "auto"},
		]
	},
});
