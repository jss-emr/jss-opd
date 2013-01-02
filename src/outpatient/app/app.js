Ext.Loader.setPath({
    'Ext.ux.touch.grid': '../lib/touch/Ext.ux.touch.grid',//Path to grid code so that grid fuctionalities and view can be accessed
});

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.i18n': 'lib/i18n' //Path to the i18n library
    }
});

Ext.application({
    name: 'Jss.Outpatient',
    // models, stores, controller and views used in the OPD directly
    models: ['Patient', 'Visit', 'VitalStats', 'ChiefComplaint'],
    stores: ['patients', 'chiefcomplaints'],
    views: ['Viewport'],
    controllers: ['examination'],
    // to launch the module view
    launch: function () {
        Ext.create('Jss.Outpatient.view.Viewport');
    }
});
