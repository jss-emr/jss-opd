Ext.define('Jss.Outpatient.view.diagnosis', {
    extend: 'Ext.Container',
    alias: 'widget.diagnosis',
    xtype: 'diagnosis-panel',
    id: 'diagnosis-panel',
    config: {
        layout: {
            type: 'vbox'
        },
        title: 'Diagnosis',
        items: [ {
            xtype: 'formpanel',
            listeners: {
                    tap: {
                            element: 'innerElement',
                            fn: function(event, div, listener)
                            {
                                var l = Ext.getCmp('opd-panel');
                                l.setActiveItem(Ext.getCmp('diagnosis-card'));
                            }
                        }
                        },
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
                    id: 'disease',
                    store: 'diagnosis'

//                    store: {
//                        data: [{
//                            complaint : 'Viral Fever',
//                            id: '1'
//                            }, {
//                            complaint : 'Dysentry',
//                            id: '2'
//                            }, {
//                            complaint: 'Cold',
//                             id: '3'
//                            }, {
//                            complaint: 'Malaria',
//                            id: '4'
//                        }]
//                    }
                }]
             }]
        }]
    }
 })
