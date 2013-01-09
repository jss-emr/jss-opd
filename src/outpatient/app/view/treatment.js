Ext.define('Jss.Outpatient.view.treatment', {
    extend: 'Ext.Container',
    alias: 'widget.treatment',
    xtype: 'treatment-panel',
    id: 'treatment-panel',
    config: {
        layout: {
            type: 'card'
        },
        activeItem: 0,
        title: 'Treatment',
//        items: [ {
//            xtype: 'formpanel',
//            flex: 1,
//            scrollable: 'false',
//            listeners: {
//                tap: {
//                    element: 'innerElement',
//                    fn: function(event, div, listener)
//                    {
//                        var l = Ext.getCmp('opd-panel');
//                        l.setActiveItem(Ext.getCmp('treatment-card'));
//                    }
//                }
//            },
                items: [{
                    title: 'Treatment',
                    xtype: 'list',
                    html:'<b>Treatment</b>',
                    id: 'treatmentViewPanel',
                    listeners: {
                    touchstart: {
                    element: 'innerElement',
                    fn: function(event, div, listener)
                     {
                        var l = Ext.getCmp('opd-panel');
                        l.setActiveItem(Ext.getCmp('treatment-card'));
                     }
                    }
                   } ,
                   // scrollable: 'false',
                    itemTpl: '<table><tr><td>{name},{dosage},&nbsp;</td></br><td>{quantity}&nbsp;</td></br><td>{time}</td></tr></table>',
                    store: 'treatment'
                }]
//            }]
    }
})
