Ext.application({
    name: 'Jss.Outpatient',
    models: [
        'Patient', 
        'Visit', 
        'VitalStats', 
        'Instruction',
        'DiseaseTemplate',
        'SymptomsTemplate',
        'concept.Concept',
        'concept.Observation',
        'treatment.MedicineDetail',
        'treatment.TreatmentAdvice',
    ],
    stores: [
        'patients', 
        'patient',
        'DiseaseTemplates',
        'SymptomsTemplates',
        'history.HistoryConcepts',
        'history.HistoryObservations',
        'diagnosis.Diagnosis',
        'diagnosis.DiagnosisConcepts',
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
        'util.ArrayMultiSelectionBox',
        'util.MenuPanel',
        'util.ComplexDataCaptureContainer',
        'autocomplete.AutoCompleteWidget',
        'autocomplete.AutoCompleteWithFreeTextWidget',
        'concept.UIElementFactory',
        'observation.AddObservationPanel',
        'observation.ObservationSummaryPanel',
        'observation.SummaryTemplate',
        'Viewport'
    ],
    controllers: [
        'ExaminationController',
        'TreatmentAdviceController',
        'DiagnosisController',
        'InstructionController',
        'HistoryController',
        'SymptomsTemplateController',
    ],

    launch: function () {
        Ext.create('Jss.Outpatient.view.Viewport');
    }
});