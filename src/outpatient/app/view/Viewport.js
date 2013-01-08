Ext.define('Jss.Outpatient.view.Viewport', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',
    id: 'mainview',
    //other view used in this view are included
    requires: ['Jss.Outpatient.view.consultation','Jss.Outpatient.view.examination','Jss.Outpatient.view.edit.examination-edit',
        'Jss.Outpatient.view.edit.history-edit','Jss.Outpatient.view.edit.diagnosis-edit','Jss.Outpatient.view.edit.treatment-edit',
        'Jss.Outpatient.view.edit.instruction-edit'],

    config: {
        autoDestroy: false,
        fullscreen: true,
        items: [{
            xtype: 'consultation'
        }]
    }
});
