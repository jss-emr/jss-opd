Ext.define('Jss.Outpatient.view.instruction', {
    extend: 'Ext.Container',
    alias: 'widget.instruction',
    xtype: 'instruction-panel',
    id: 'instruction-panel',
    config: {
        layout: {
            type: 'vbox'
        },
//        title: 'Instruction',
        items: [ {
            xtype: 'formpanel',
            flex: 1,
            id: 'instructionPanel',
            scrollable: 'false',
            listeners: {
                touchstart: {
                    element: 'innerElement',
                    fn: function(event, div, listener)
                    {
                        var l = Ext.getCmp('mainview');
                        l.push(Ext.getCmp('instruction-card'));
                    }
                }
            },
            items: [{
                xtype: 'fieldset',
                title: 'Instruction',
                items: [{
                    xtype: 'selectfield',
                    label: 'Chief Instruction',
                    valueField: 'complaint',
                    displayField: 'complaint',
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
})
