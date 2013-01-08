Ext.define('Jss.Outpatient.view.treatment', {
    extend: 'Ext.Container',
    alias: 'widget.treatment',
    xtype: 'treatment-panel',
    id: 'treatment-panel',
    config: {
        layout: {
            type: 'vbox'
        },
//        title: 'Treatment',
        items: [ {
            xtype: 'formpanel',
            flex: 1,
            scrollable: 'false',
            listeners: {
                tap: {
                    element: 'innerElement',
                    fn: function(event, div, listener)
                    {
                        var l = Ext.getCmp('opd-panel');
                        l.setActiveItem(Ext.getCmp('treatment-card'));
                    }
                }
            },
            items: [{
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
})
