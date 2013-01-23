Ext.define('Jss.Outpatient.view.treatment.TreatmentSummary', {
	extend: 'Jss.Outpatient.view.util.TouchableContainer',
	alias: 'widget.treatmentSummary',

	config: {
		layout: 'fit',
		items:[
			{
				xtype: 'list',
				html:'<b>Treatment Advice</b>',
				store: 'TreatmentAdvice',
				height: '100%',
				width: '100%',
                inline: true,
                itemTpl: '{name}',
			}
		]
	}
})