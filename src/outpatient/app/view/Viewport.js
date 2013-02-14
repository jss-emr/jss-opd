Ext.define('Jss.Outpatient.view.Viewport', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',
    id: 'mainview',

    requires: [
        'Jss.Outpatient.view.patient',
        'Jss.Outpatient.view.ContainerWithHeader',
        'Jss.Outpatient.view.consultation',
        'Jss.Outpatient.view.history.HistoryEdit',
        'Jss.Outpatient.view.history.HistorySummary',
        'Jss.Outpatient.view.examination.ExaminationSummary',
        'Jss.Outpatient.view.examination.ExaminationEdit',
        'Jss.Outpatient.view.treatment.FullSummaryTemplate',
        'Jss.Outpatient.view.treatment.ShortSummaryTemplate',
        'Jss.Outpatient.view.treatment.TreatmentSummary',
        'Jss.Outpatient.view.treatment.TreatmentEdit',
        'Jss.Outpatient.view.diagnosis.SummaryTemplate',
        'Jss.Outpatient.view.diagnosis.DiagnosisSummary',
        'Jss.Outpatient.view.diagnosis.DiagnosisEdit',
        'Jss.Outpatient.view.instruction.InstructionSummary',
        'Jss.Outpatient.view.instruction.InstructionEdit',
        'Jss.Outpatient.view.symptomstemplate.SelectPage',
    ],

    config: {
        autoDestroy: false,
        fullscreen: true,
        activeItem: 0,
        navigationBar: false,
        layout: {
            type: 'card',
            animation: {type: 'fade', duration: 10},
        },

        items: [{
            xtype: 'consultation'
        }]
    }
});
