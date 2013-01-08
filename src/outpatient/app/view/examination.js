Ext.define('Jss.Outpatient.view.examination', {
    extend: 'Ext.Container',
    alias: 'widget.examination',
    xtype: 'examination-panel',
    id: 'examination-panel',
    config: {
        layout: {
            type: 'card'
        },
//        title: 'Examination',
            activeItem: 0,
            flex: 1,
            id: 'examinationPanel',
//            scrollable: 'false',
            items: [{
                title: 'Examination',
                xtype: 'list',
                html:'<b>Examination</b>',
                id: 'examinationViewPanel',
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
                // scrollable: 'false',
                itemTpl: '{complaint}:&nbsp{duration},&nbsp;',
                store: 'examination'
            }]
    }

})