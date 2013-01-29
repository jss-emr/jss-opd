Ext.define('Jss.Outpatient.view.diagnosis.DiagnosisSummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias: 'widget.diagnosis',
    config: {
        layout: 'hbox',
        title: 'Diagnosis',
        items: [
            {
                xtype: 'titlebar',
                title: 'Diagnosis',
                docked: 'top',
                cls: 'summaryTitle',
                flex: 1,
            },
            {
                title: 'Diagnosis',
                xtype: 'list',
                id: 'diagnosisSummaryList',
                store: 'Diagnosis',
                itemTpl: Ext.create('Jss.Outpatient.view.diagnosis.SummaryTemplate'),
                inline: true,
                flex: 10,
                cls: 'diagnosisSummary',
            },
            {
                xtype: 'list',
                id: 'diseaseTemplate',
                store: 'DiseaseTemplates',
                itemTpl: '{name}',
                flex: 3,
            }
        ]
    },
 })
