Ext.define('Jss.Outpatient.view.treatment.TreatmentSummary', {
	extend: 'Ext.Container',
	alias: 'widget.treatmentSummary',
    requires: ['Jss.Outpatient.view.treatment.SummaryTemplate'],

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
                itemTpl: Ext.create('Jss.Outpatient.view.treatment.SummaryTemplate'),

                listeners: {
                    touchstart: {
	                    element: 'innerElement',
	                    fn: function(event, div, listener) {
	                        var l = Ext.getCmp('mainview');
	                        l.push(Ext.getCmp('treatmentEdit'));
	                    }
	                }
                },

			}
		]
	}
})