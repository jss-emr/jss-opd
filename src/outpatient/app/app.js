Ext.Loader.setPath({
    'Ext.ux.touch.grid': '../lib/touch/Ext.ux.touch.grid',
});

Ext.require([
    'Ext.ux.touch.grid.List',
    'Ext.ux.touch.grid.feature.Feature',
    'Ext.ux.touch.grid.feature.Editable',
    'Ext.ux.touch.grid.feature.Sorter'
]);


Ext.application({
    name: 'Jss.Outpatient',
    models: [
        'Patient', 
        'Visit', 
        'VitalStats', 
        'Diagnosis',
        'Instruction',
        'concept.Concept',
        'concept.Observation',
        'treatment.MedicineDetail',
        'treatment.TreatmentAdvice',
    ],
    stores: [
        'patients', 
        'patient',
        'history.HistoryConcepts',
        'history.HistoryObservations',
        'diagnosis.Diagnosis',
        'diagnosis.AllDiagnosis',
        'examination.ExaminationConcepts',
        'examination.ExaminationObservations',
        'treatment.TreatmentAdvice',
        'treatment.MedicineDetails',
        'instruction.AllInstructions',
        'instruction.Instructions',
    ],
    views: [
        'util.TouchableContainer',
        'util.ArraySelectionBox',
        'autocomplete.AutoCompleteWidget',
        'concept.UIElementFactory',
        'observation.AddObservationPanel',
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
