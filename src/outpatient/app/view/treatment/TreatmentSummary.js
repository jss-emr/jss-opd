Ext.define('Jss.Outpatient.view.treatment.TreatmentSummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias: 'widget.treatmentSummary',

    config: {
        layout: 'hbox',
        items:[
            {
                xtype: 'container',
                html: 'Treatment Advice',
                cls: 'summaryTitle',
            },
            {
                xtype: 'container',
                layout: 'fit',
                flex: 1,
                cls: 'content',
                items: [{
                    xtype: 'dataview',
                    store: 'TreatmentAdvice',
                    height: '100%',
                    width: '100%',
                    itemTpl: '{summary}',
                    cls: 'stripedList',
                }]
            },
        ]
    }
})