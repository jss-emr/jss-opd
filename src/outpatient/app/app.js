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
        'Instruction',
        'history.Concept',
        'history.Observation',
        'examination.Complaint',
        'examination.Examination',
        'treatment.MedicineDetail',
        'treatment.TreatmentAdvice',
    ],
    stores: [
        'patients', 
        'sign',
        'patient',
        'history.Concepts',
        'history.Observations',
        'diagnosis.Diagnosis',
        'diagnosis.AllDiagnosis',
        'examination.AllComplaints',
        'examination.Examinations',
        'treatment.TreatmentAdvice',
        'treatment.MedicineDetails',
        'instruction.AllInstructions',
        'instruction.Instructions',
    ],
    views: [
        'util.TouchableContainer',
        'Viewport'
    ],
    controllers: [
        'ExaminationController',
        'TreatmentAdviceController',
        'DiagnosisController',
        'InstructionController',
        'HistoryController',
    ],

    launch: function () {
        Ext.create('Jss.Outpatient.view.Viewport');
    }
});
