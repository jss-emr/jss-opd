var treatmentAdvice = [
	["med1", 500, 1, 0, 0, 1, 10, "After Meal"],
	["med2", 200, 1, 0, 0, 1, 10, "After Meal"],
	["med3", 500, 0, 0, 0, 1, 5,  "When Pain"]
];

var treatmentAdviceStore = Ext.create('Ext.data.ArrayStore', {
	fields : [
		{name: "medicine"},
		{name: "mg", type: "integer"},
		{name: "morning", type: "integer"},
		{name: "noon", type: "integer"},
		{name: "evening", type: "integer"},
		{name: "night", type: "integer"},
		{name: "days", type: "integer"},
		{name: "instruction"}
	],

	data: treatmentAdvice
});

Ext.define('MedicineDetails', {
	extend: 'Ext.data.Model',
	fields: [
		{name: "name"},
		{name: "possibleStrengths", type: "auto"},
		{name: "possibleDosages", type: "auto"}
	]
});

var medicines = Ext.create('Ext.data.Store', {
	model: MedicineDetails,
	data : [
		{name: "Paracetamol", "possibleStrengths": [100, 200, 300, 400], "possibleDosages" : [0, 1, 2, 3]},
		{name: "Citrigin",    "possibleStrengths": [100, 150, 300],      "possibleDosages" : [0, 1, 2, 3]},
		{name: "Amoxycilin",  "possibleStrengths": [100, 200, 300, 400], "possibleDosages" : [0, 1, 2, 3]},
		{name: "Ibuprofen",   "possibleStrengths": [100, 200],           "possibleDosages" : [0, 1, 2, 3]},
		{name: "Crocin",      "possibleStrengths": [100, 200, 300, 400], "possibleDosages" : [0, 1, 2, 3]},
		{name: "Aspirin", 	  "possibleStrengths": [300, 200, 500, 400], "possibleDosages" : [0, 100, 200]}
	],
});

var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
    clicksToEdit: 1
});

var selectedRecord = null;

Ext.application({
	name: "Treatment Advice",
	launch : function() {
		var grid = Ext.create('Ext.grid.Panel', {
		    store: treatmentAdviceStore,
		    stateful: true,
		    stateId: 'stateGrid',
	        title: 'Array Grid',
	        renderTo: Ext.getBody(),
	        viewConfig: {
	            stripeRows: true
	        },
	        plugins : [cellEditing],
		    columns: [
		        {
		            text     : 'Medicine',
		            flex     : 1,
		            sortable : false,
		            dataIndex: 'medicine'
		        },
		        {
		            text     : 'mg',
		            flex     : 1,
		            dataIndex: 'mg',
		            field: {
		                xtype: 'numberfield',
		                allowBlank: false,
		                minValue: 0,
		                maxValue: 100000
		            }
		        },
		        {
		            flex     : 1,
		            text     : 'Morning',
		            dataIndex: 'morning'
		        },
		        {
		            flex     : 1,
		            text     : 'Noon',
		            dataIndex: 'noon'
		        },
		        {
		            text     : 'Evening',
		            flex     : 1,
		            dataIndex: 'evening'
		        },
		        {
		            text     : 'Night',
		            flex     : 1,
		            dataIndex: 'night'
		        },
		        {
		            text     : 'Days',
		            flex     : 1,
		            dataIndex: 'days'
		        },
		        {
		            text     : 'Instruction',
		            flex     : 1,
		            dataIndex: 'instruction'
		        }
		    ]
		});

		var search =  Ext.create('Ext.form.ComboBox', {
		    store: medicines,
		    valueField: "name",
		    displayField: "name",
		    renderTo : Ext.getBody(),
		    queryMode: 'local',
		    typeAhead: true,
		    listeners : {
		    	select : function(combo, record, index){
		    		selectedRecord = record[0].data;
		    	}
		    }
		});

		var inputPanel = Ext.create('Ext.panel.Panel', {
			layout : "hbox",
			title : "Add treatmentAdvice",
			renderTo : Ext.getBody(),
			items : [
				{
					xtype: 'panel',
					flex : 1,
					height : 200,
				},
				{
					xtype: 'panel',
					flex : 1,
					height : 200
				},
				{
					xtype: 'panel',
					flex : 1,
					height : 200
				},
				{
					xtype: 'panel',
					flex : 1,
					height : 200
				},
				{
					xtype: 'panel',
					flex : 1,
					height : 200
				},
				{
					xtype: 'panel',
					flex : 1,
					height : 200
				},
				{
					xtype: 'panel',
					flex : 1,
					height : 200
				},
				{
					xtype: 'panel',
					flex : 1,
					height : 200
				},
			]

		});


	}

});
