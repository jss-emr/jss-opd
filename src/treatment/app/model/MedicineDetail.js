Ext.define('Jss.Treatment.model.MedicineDetail', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{name: "name"},
			{name: "possibleStrengths", type: "auto"},
			{name: "possibleDosages", type: "auto"}
		]
	}
});
