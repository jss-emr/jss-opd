Ext.Loader.setPath({
    'Ext.ux.touch.grid': '../lib/touch/Ext.ux.touch.grid',//Path to grid code so that grid fuctionalities and view can be accessed
});

Ext.require([
    'Ext.ux.touch.grid.List',
    'Ext.ux.touch.grid.feature.Feature',
    'Ext.ux.touch.grid.feature.Editable',
    'Ext.ux.touch.grid.feature.Sorter'
]);

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.i18n': 'lib/i18n' //Path to the i18n library
    }
});

Ext.application({
    name: 'Jss.Outpatient',
    // models, stores, controller and views used in the OPD directly
    models: [
        'Patient', 
        'Visit', 
        'VitalStats', 
        'ChiefComplaint',
        'sign','Diagnosis',
        'Treatment', 
        'treatment.MedicineDetail', 
        'treatment.TreatmentAdvice',
    ],
    stores: [
        'patients', 
        'chiefcomplaints',
        'sign',
        'diagnosis',
        'patient',
        'treatment',
        'examination',
        'treatment.TreatmentAdvice',
        'treatment.MedicineDetails',
    ],
    views: ['Viewport', 'treatment.TreatmentEdit'],
    controllers: ['examination', 'TreatmentAdviceController'],
    // to launch the module view
    launch: function () {
        Ext.create('Jss.Outpatient.view.Viewport');
    }
});
