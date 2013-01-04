Ext.define('Jss.Outpatient.view.Viewport', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',
    id: 'mainview',
    //other view used in this view are included
    requires: ['Jss.Outpatient.view.opd.consultation','Jss.Outpatient.view.opd.examination','Jss.Outpatient.view.opd.signlist'],

    config: {
        autoDestroy: false,
        fullscreen: true,
        items: [{
            xtype: 'consultation'
        }]
    }
});
