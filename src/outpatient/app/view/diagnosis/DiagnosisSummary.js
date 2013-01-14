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
            html: '<b>Diagnosis</b>',
            inline: true,
            itemTpl: '<table><tr class="summary"><td>{sign}</td></tr></table>',
        }]
    },
 })
