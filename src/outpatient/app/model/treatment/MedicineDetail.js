Ext.define('Jss.Outpatient.model.treatment.MedicineDetail', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{name: "name"},
			{name: "possibleStrengths", type: "auto"},
			{name: "possibleDosages", type: "auto"}
		]
	},
});
