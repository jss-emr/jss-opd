Ext.define('Jss.Outpatient.view.examination.ExaminationSummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias: 'widget.examinationSummary',

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                title: 'Examinations',
                docked: 'top',
                cls: 'summaryTitle'
            },
            {
                xtype: 'dataview',
                id: 'complaintsList',
                store: 'ExaminationObservations',
                itemTpl: Ext.create('Jss.Outpatient.view.observation.SummaryTemplate'),
                cls: 'observationVisitPage stripedList',
            }
        ]
    },
});