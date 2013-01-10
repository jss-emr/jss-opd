Ext.define('Jss.Outpatient.view.edit.diagnosis-edit', {
    extend: 'Ext.Container',
    alias: 'widget.diagnosis-edit',
    xtype: 'diagnosis-edit-panel',
    id: 'diagnosis-edit',
    config: {
        layout: {
            type: 'vbox'
        },
        title: 'Diagnosis',
        items: [ {
            xtype: 'formpanel',
            flex: 1,
            id: 'diagnosisPanel',
            scrollable: 'false',
            items: [{
                xtype: 'fieldset',
                title: 'Diagnosis',
                    items: [{
                    xtype: 'selectfield',
                    label: 'Disease',
                    valueField: 'sign',
                    displayField: 'sign',
                    id: 'disease-edit',
                    store: 'diagnosis'
                }]
             }]
        }]
    }
 })
