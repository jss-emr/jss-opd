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
                title: 'Examination',
                xtype: 'dataview',
                id: 'complaintsList',
                itemTpl: '{summary}',
                store: 'ExaminationObservations',
                cls: 'stripedList'
            }
        ]
    },
});