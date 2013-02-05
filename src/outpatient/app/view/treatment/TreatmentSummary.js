Ext.define('Jss.Outpatient.view.treatment.TreatmentSummary', {
	extend: 'Jss.Outpatient.view.util.TouchableContainer',
	alias: 'widget.treatmentSummary',

	config: {
		layout: 'fit',
		items:[
            {
                xtype: 'titlebar',
                title: 'Treatment Advice',
                docked: 'top',
                cls: 'summaryTitle'
            },
            {
				xtype: 'dataview',
				store: 'TreatmentAdvice',
				height: '100%',
				width: '100%',
				itemTpl: '{summary}',
				cls: 'stripedList',
			}
		]
	}
})