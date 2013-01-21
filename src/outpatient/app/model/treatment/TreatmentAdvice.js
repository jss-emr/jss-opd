Ext.define('Jss.Outpatient.model.treatment.TreatmentAdvice', {
	extend: 'Ext.data.Model',
	config: {

		fields: [
            {name: "name"},
            {name: "medicineDetails", type: "auto"},
            {name: "properties", type: "auto"},
            {name: "summary", type: "auto"}
		]
	},
});
