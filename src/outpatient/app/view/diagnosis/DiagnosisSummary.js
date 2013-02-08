Ext.define('Jss.Outpatient.view.diagnosis.DiagnosisSummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias: 'widget.diagnosis',
    config: {
        layout: 'hbox',
        title: 'Diagnosis',
        items: [
            {
                xtype: 'container',
                html: 'Diagnosis',
                cls: 'summaryTitle',
            },
            {
                xtype: 'container',
                layout: 'fit',
                cls: 'content',
                flex: 1,
                items: [{
                    title: 'Diagnosis',
                    xtype: 'dataview',
                    id: 'diagnosisSummaryList',
                    store: 'Diagnosis',
                    itemTpl: Ext.create('Jss.Outpatient.view.diagnosis.SummaryTemplate'),
                    inline: true,
                    itemCls: 'observationVisitPage',
                    cls: 'diagnosisSummary',
                }],
            },
        ]
    },
 })
