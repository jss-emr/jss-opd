Ext.define('Jss.Treatment.view.Viewport', {
    extend: 'Ext.Panel',

    config: {
        layout: 'vbox',
        autoScroll:true,
        autoDestroy: false,
        fullscreen: true,
        items: [
            {
                xtype : 'treatment_advice_grid',
                flex: 1,

                // height: 400
            },
            {
                xtype : 'add_treatment_advice',
                flex: 2,
                // height: 200,
                // overflow: "yscroll"
            }
        ]
    }
});
