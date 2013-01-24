Ext.define('Jss.Outpatient.view.diagnosis.DiagnosisSummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias: 'widget.diagnosis',
    config: {
        layout: 'fit',
        title: 'Diagnosis',
        items: [{
            title: 'Diagnosis',
            xtype: 'list',
            id: 'diagnosisSummaryList',
            store: 'Diagnosis',
            itemTpl: Ext.create('Jss.Outpatient.view.diagnosis.SummaryTemplate'),
            html: '<b>Diagnosis</b>',
            inline: true,
            cls: 'diagnosisSummary',
        }]
    },
 })
