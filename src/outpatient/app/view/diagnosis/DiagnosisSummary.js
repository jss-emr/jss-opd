Ext.define('Jss.Outpatient.view.diagnosis.DiagnosisSummary', {
    extend: 'Ext.Container',
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

            listeners: {
                touchstart: {
                    element: 'innerElement',
                    fn: function(event, div, listener) {
                        var l = Ext.getCmp('mainview');
                        l.push(Ext.getCmp('diagnosis-card'));
                    }
                }
            }
        }]
    }
 })
