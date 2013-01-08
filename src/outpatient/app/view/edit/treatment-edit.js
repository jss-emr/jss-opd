Ext.define('Jss.Outpatient.view.edit.treatment-edit', {
    extend: 'Ext.Container',
    alias: 'widget.treatment-edit',
    xtype: 'treatment-edit-panel',
    id: 'treatment-edit',
    config: {
        layout: {
            type: 'vbox'
        },
//        title: 'History',
        activeItem: 1,
        items: [{
            xtype: 'formpanel',
            flex: 1,
            id: 'historyPanel',
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
                },
                {
                 xtype: 'fieldset',
                 title: 'Treatment',
                 items: [{
                    xtype: 'selectfield',
                    label: 'Drug',
                    valueField: 'drug',
                    displayField: 'title',
                    id: 'selectedDrug',
                    store: {
                        data: [{
                            complaint : 'Paracetamol',
                            id: '1'
                        }, {
                            complaint : 'Crocin',
                            id: '2'
                        }, {
                            complaint: 'Calpol',
                            id: '3'
                        }, {
                            complaint: 'Bricanyl',
                            id: '4'
                        }]
                    }
                }]
                }]
        }]
    }
});