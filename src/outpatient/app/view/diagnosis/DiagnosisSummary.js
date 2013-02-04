Ext.define('Jss.Outpatient.view.diagnosis.DiagnosisSummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias: 'widget.diagnosis',
    config: {
        layout: 'fit',
        title: 'Diagnosis',
        items: [
            {
                xtype: 'titlebar',
                title: 'Diagnosis',
                docked: 'top',
                cls: 'summaryTitle',
            },
            {
                title: 'Diagnosis',
                xtype: 'list',
                id: 'diagnosisSummaryList',
                store: 'Diagnosis',
                itemTpl: Ext.create('Jss.Outpatient.view.diagnosis.SummaryTemplate'),
                inline: true,
                cls: 'diagnosisSummary',
            },
        ]
    },
 })
