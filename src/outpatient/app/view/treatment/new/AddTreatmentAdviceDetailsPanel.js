Ext.define('Jss.Outpatient.view.treatment.new.AddTreatmentAdviceDetailsPanel', {
	extend: 'Ext.Panel',
	alias: 'widget.addTreatmentAdviceDetailsPanel',

	config: {
		height: 300,
		width: '100%',
		layout: 'hbox',
		style: 'display: none; margin-top: 10px',

		items: [
			{
				docked: 'top',
				height: '50',
				style: 'margin-bottom: 10px; margin-left: 10px',
				items : [
					{
						xtype: 'button',
						id: 'addTreatmentAdviceButton',
						text: 'Add',
						width: '10%',
					}
				]
			},
			{
				xtype: 'panel',
				width: '10%',
				height: 300,
				items: [{
					xtype: 'arraySelectionBox',
					id: 'drugStrengthSelectionBox',
					width: '80%',
				}]
			},
			{
				xtype: 'panel',
				width: '10%',
				height: 300,
				items: [{
					xtype: 'arraySelectionBox',
					id: 'morningDosageSelectionBox',
					width: '50%',
				}]
			},
			{
				xtype: 'panel',
				width: '10%',
				height: 300,
				items: [{
					xtype: 'arraySelectionBox',
					id: 'noonDosageSelectionBox',
					width: '50%'
				}]
			},
			{
				xtype: 'panel',
				width: '10%',
				height: 300,
				items: [{
					xtype: 'arraySelectionBox',
					id: 'eveningDosageSelectionBox',
					width: '50%'
				}]
			},
			{
				xtype: 'panel',
				width: '10%',
				height: 300,
				items: [{
					xtype: 'arraySelectionBox',
					id: 'nightDosageSelectionBox',
					width: '50%'
				}]
			},
			{
				xtype: 'panel',
				width: '10%',
				height: 300,
				items: [{
					xtype: 'arraySelectionBox',
					id: 'numberOfDaysSelectBox',
					width: '90%'
				}]
			},
			{
				xtype: 'panel',
				width: '20%',
				height: 300,
				items: [{
					xtype: 'arraySelectionBox',
					id: 'instructionsSelectBox',
					width: '90%'
				}]
			},
		]
	},

	showFor: function(drug) {
		this.show();

		Ext.getCmp('drugStrengthSelectionBox').addData(drug.data.possibleStrengths);
		Ext.getCmp('morningDosageSelectionBox').addData(drug.data.possibleDosages);
		Ext.getCmp('noonDosageSelectionBox').addData(drug.data.possibleDosages);
		Ext.getCmp('eveningDosageSelectionBox').addData(drug.data.possibleDosages);
		Ext.getCmp('nightDosageSelectionBox').addData(drug.data.possibleDosages);
		Ext.getCmp('numberOfDaysSelectBox').addData(this._numbderOfDaysRange(1, 30));
		Ext.getCmp('instructionsSelectBox').addData(this._instructionList());
	},

	getTreatmentAdvice: function() {
		return Ext.create('Jss.Outpatient.model.treatment.TreatmentAdvice', {
			medicine: Ext.getCmp('drugAutocompleteSearchField').getValue(),
			mg: Ext.getCmp('drugStrengthSelectionBox').getSelectedValue(),
			morning: Ext.getCmp('morningDosageSelectionBox').getSelectedValue(),
			noon: Ext.getCmp('noonDosageSelectionBox').getSelectedValue(),
			evening: Ext.getCmp('eveningDosageSelectionBox').getSelectedValue(),
			night: Ext.getCmp('nightDosageSelectionBox').getSelectedValue(),
			days: Ext.getCmp('numberOfDaysSelectBox').getSelectedValue(),
			instruction: Ext.getCmp('instructionsSelectBox').getSelectedValue()
		});

	},

	_instructionList : function() {
		return ["-", "When Pain", "When Fever", "Before Meal", "After Meal"];
	},

	_numbderOfDaysRange: function(start, end) {
		var range = new Array();

		for(var i = start; i <= end; i++) {
			range.push(i);
		}
		return range;
	}

})
