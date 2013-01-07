Ext.define('Jss.Treatment.model.TreatmentAdvice', {
	extend: 'Ext.data.Model',
	config: {

		fields: [
			{name: "medicine", type: "string"},
			{name: "mg", type: "integer"},
			{name: "morning", type: "integer"},
			{name: "noon", type: "integer"},
			{name: "evening", type: "integer"},
			{name: "night", type: "integer"},
			{name: "days", type: "integer"},
			{name: "instruction"}
		]
	}

});