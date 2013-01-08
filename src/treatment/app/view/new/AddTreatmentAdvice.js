Ext.define('Jss.Treatment.view.new.AddTreatmentAdvice', {
	extend: 'Ext.Container',
	alias: "widget.add_treatment_advice",

	config: {
		layout: 'hbox',
		id: 'addTreatmentAdvice',
		scroll: 'both',

		items: [
			{
				xtype: 'autocomplete',
				id: 'drugAutocompletePanel',
				width: '20%',
			},
			{
				xtype: 'panel',
				id: 'drugStrengthList',
				width: '10%'
			}
		]
	}
})