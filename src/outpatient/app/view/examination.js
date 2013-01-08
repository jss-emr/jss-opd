Ext.define('Jss.Outpatient.view.examination', {
    extend: 'Ext.Container',
    alias: 'widget.examination',
    xtype: 'examination-panel',
    id: 'examination-panel',
    config: {
        layout: {
            type: 'vbox'
        },
//        title: 'Examination',
        activeItem: 1,
        items: [{
            xtype: 'formpanel',
            listeners: {
                tap: {
                    element: 'innerElement',
                    fn: function(event, div, listener)
                    {
                        var l = Ext.getCmp('opd-panel');
                        l.setActiveItem(Ext.getCmp('examination-card'));
                    }
                }
            },
            flex: 1,
            id: 'examinationPanel',
            scrollable: 'false',
            items: [{
                        xtype: 'fieldset',
                        title: 'Examination',
                        items: [{
                            xtype: 'selectfield',
                            label: 'Chief Complaint',
                            valueField: 'chiefcomplaint',
                            displayField: 'title',
                            id: 'chiefcomplaint',
                            store: {
                                data: [{
                                    complaint : 'Abdominal Pain',
                                    id: '1'
                                }, {
                                    complaint : 'Nausea',
                                    id: '2'
                                }, {
                                    complaint: 'Vomiting',
                                    id: '3'
                                }, {
                                    complaint: 'weakness',
                                    id: '4'
                                }]
                            }
                        }]

                    } ]
        }]
    }

})