Ext.define('Jss.Outpatient.view.edit.instruction-edit', {
    extend: 'Ext.Container',
    alias: 'widget.instruction-edit',
    xtype: 'instruction-edit-panel',
    id: 'instruction-edit',
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
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Instruction',
                    items: [{
                        xtype: 'selectfield',
                        label: 'Chief Instruction',
                        valueField: 'chiefinstruction',
                        displayField: 'title',
                        id: 'chiefinstruction',
                        store: {
                            data: [{
                                complaint : 'BP',
                                id: '1'
                            }, {
                                complaint : 'Temperature',
                                id: '2'
                            }, {
                                complaint: 'Vaccination',
                                id: '3'
                            }, {
                                complaint: 'Dressing',
                                id: '4'
                            }]
                        }
                    }]
                }
            ]
        }]
    }
});