Ext.define('Jss.Outpatient.view.opd.edit.instruction-edit', {
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
                }]
                }]
    }
});