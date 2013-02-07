Ext.define('Jss.Outpatient.view.examination.ExaminationSummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias: 'widget.examinationSummary',

    config: {
        layout: 'hbox',
        items: [
            {
                xtype: 'container',
                html: 'Examinations',
                cls: 'summaryTitle',
            },
            {
                xtype: 'container',
                layout: 'fit',
                flex: 4,
                cls: 'content',
                items: [{
                    xtype: 'dataview',
                    id: 'complaintsList',
                    store: 'ExaminationObservations',
                    itemTpl: Ext.create('Jss.Outpatient.view.observation.SummaryTemplate'),
                    cls: 'observationVisitPage stripedList',
                }]
            }
        ]
    },
});