Ext.define('Jss.Outpatient.view.Viewport', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',
    id: 'mainview',

    requires: [
        'Jss.Outpatient.view.consultation',
        'Jss.Outpatient.view.edit.instruction-edit',
        'Jss.Outpatient.view.history.HistoryEdit',
        'Jss.Outpatient.view.examination.ExaminationSummary',
        'Jss.Outpatient.view.examination.ExaminationEdit',
        'Jss.Outpatient.view.treatment.TreatmentEdit',
        'Jss.Outpatient.view.treatment.TreatmentSummary',
        'Jss.Outpatient.view.diagnosis.DiagnosisEdit',

    ],

    config: {
        autoDestroy: false,
        fullscreen: true,
        activeItem: 0,
        items: [{
            xtype: 'consultation'
        }]
    }
});
