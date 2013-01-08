Ext.define('Jss.Outpatient.view.edit.examination-edit', {
    extend: 'Ext.Container',
    alias: 'widget.examination-edit',
    xtype: 'examination-editpanel',
    id: 'examination-editpanel',
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
            },{
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

                    }]
                }]
    }
})