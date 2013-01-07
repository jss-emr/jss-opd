Ext.define('Jss.Treatment.store.MedicineDetails', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Jss.Treatment.model.MedicineDetail',
		data : [
			{name: "Paracetamol", "possibleStrengths": [100, 200, 300, 400], "possibleDosages" : [0, 1, 2, 3]},
			{name: "Citrigin",    "possibleStrengths": [100, 150, 300],      "possibleDosages" : [0, 1, 2, 3]},
			{name: "Amoxycilin",  "possibleStrengths": [100, 200, 300, 400], "possibleDosages" : [0, 1, 2, 3]},
			{name: "Ibuprofen",   "possibleStrengths": [100, 200],           "possibleDosages" : [0, 1, 2, 3]},
			{name: "Crocin",      "possibleStrengths": [100, 200, 300, 400], "possibleDosages" : [0, 1, 2, 3]},
			{name: "Aspirin", 	  "possibleStrengths": [300, 200, 500, 400], "possibleDosages" : [0, 100, 200]}
		],
		
	}
});