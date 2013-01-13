Ext.Loader.setPath({
    'Ext.ux.touch.grid': '../lib/touch/Ext.ux.touch.grid',
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
        'Ext.i18n': 'lib/i18n'
    }
});

Ext.application({
    name: 'Jss.Outpatient',
    models: [
        'Patient', 
        'Visit', 
        'VitalStats', 
        'sign',
        'Diagnosis',
        'examination.Complaint',
        'examination.Examination',
        'treatment.MedicineDetail',
        'treatment.TreatmentAdvice',
    ],
    stores: [
        'patients', 
        'sign',
        'patient',
        'diagnosis.Diagnosis',
        'diagnosis.AllDiagnosis',
        'examination.AllComplaints',
        'examination.Examinations',
        'treatment.TreatmentAdvice',
        'treatment.MedicineDetails',
    ],
    views: ['Viewport'],
    controllers: ['examination', 'TreatmentAdviceController', 'DiagnosisController'],

    launch: function () {
        Ext.create('Jss.Outpatient.view.Viewport');
    }
});
