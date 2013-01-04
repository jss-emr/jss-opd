Ext.define('Jss.Outpatient.view.opd.examination', {
    extend: 'Ext.Container',
    alias: 'widget.examination',
    xtype: 'examination-panel',
    id: 'examination-panel',
    config: {
        layout: {
            type: 'card'
        },
        title: 'Examination',
        activeItem: 0,
        items: [{
                xtype: 'container',
                layout: {
                    type: 'slide'
                },
            listeners: {
                tap: {
                    element: 'innerElement',
                    fn: function(event, div, listener) {
                        var cmp2 = Ext.getCmp('examination-panel');
                        var cmp1 = Ext.getCmp('history-panel');
                        var cmp3 = Ext.getCmp('patient-panel');
                        var cmp4 = Ext.getCmp('bottom-panel');
                        cmp1.hide();
                        cmp3.hide();
                        cmp4.hide();

                        var backbutton = Ext.getCmp('back-button');
                        backbutton.show();
                    }
                }
            },
                items: [{
                    xtype: 'formpanel',
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

                    }]
                }]
        }]
    },
    resizePanels:function(panelToBeMaximized){
    var cmp2 = Ext.getCmp('examination-panel');
    var cmp1 = Ext.getCmp('history-panel');
    var cmp3 = Ext.getCmp('patient-panel');
    var cmp4 = Ext.getCmp('bottom-panel');

    cmp1.setWidth(0);
    cmp1.setHeight(0);

    cmp2.setWidth(0);
    cmp2.setHeight(0);

    cmp3.setWidth(0);
    cmp3.setHeight(0);

    cmp4.setWidth(0);
    cmp4.setHeight(0);

    panelToBeMaximized.setWidth('100%');
    panelToBeMaximized.setHeight(800);

}

})