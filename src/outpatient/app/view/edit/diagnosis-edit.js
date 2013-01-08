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
                xtype: 'button',
                text: 'Back',
                width: 150 ,
                id :'back-button',
                listeners: {
                    tap: {
                        fn: function(event, div, listener) {
                            var l = Ext.getCmp('opd-panel');
                            l.setActiveItem(Ext.getCmp('consultation'));
                        }
                    }
                }
            },{
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
