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