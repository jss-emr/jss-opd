Ext.define('Jss.Outpatient.view.diagnosis.DiagnosisEdit', {
    extend: 'Ext.Container',
    alias: 'widget.diagnosis-edit',

    config: {
        layout: 'vbox',
        title: 'Diagnosis',
        items: [{
            title: 'Diagnosis',
            xtype: 'list',
            flex: 1,
            store: 'Diagnosis',
            html: '<b>Diagnosis</b>',
            inline: true,
            itemTpl: '<table><tr class="summary"><td>{sign}</td></tr></table>',
        }, {
            xtype: 'formpanel',
            flex: 3,
            id: 'diagnosisPanel',
            scrollable: 'false',
            items: [{
                xtype: 'fieldset',
                title: 'Diagnosis',
                items: [{
                    xtype: 'selectfield',
                    id: 'diagnosisSelector',
                    label: 'Disease',
                    valueField: 'sign',
                    displayField: 'sign',
                    store: 'AllDiagnosis'
                }]
             }]
        }]
    }
 })
