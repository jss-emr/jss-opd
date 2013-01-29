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
        'Instruction',
        'DiseaseTemplate',
        'concept.Concept',
        'concept.Observation',
        'treatment.MedicineDetail',
        'treatment.TreatmentAdvice',
    ],
    stores: [
        'patients', 
        'patient',
        'DiseaseTemplates',
        'history.HistoryConcepts',
        'history.HistoryObservations',
        'history.HistoryQueue',
        'diagnosis.Diagnosis',
        'diagnosis.DiagnosisConcepts',
        'diagnosis.DiagnosisQueue',
        'examination.ExaminationConcepts',
        'examination.ExaminationObservations',
        'examination.ExaminationQueue',
        'treatment.TreatmentAdvice',
        'treatment.MedicineDetails',
        'instruction.AllInstructions',
        'instruction.Instructions',
    ],
    views: [
        'util.TouchableContainer',
        'util.ArraySelectionBox',
        'util.ArrayMultiSelectionBox',
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
