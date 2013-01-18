Ext.define('Jss.Outpatient.view.examination.ExaminationSummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias: 'widget.examinationSummary',
    config: {
        layout: 'fit',
        items: [{
            title: 'Examination',
            xtype: 'list',
            id: 'complaintsList',
            html:'<b>Examination</b>',
            itemTpl: '{summary}',
            store: 'ExaminationObservations',
            inline: true,
        }]
    },
});