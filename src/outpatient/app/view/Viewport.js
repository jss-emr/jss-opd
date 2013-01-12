Ext.define('Jss.Outpatient.view.Viewport', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',
    id: 'mainview',

    requires: [
        'Jss.Outpatient.view.consultation',
        'Jss.Outpatient.view.edit.history-edit',
        'Jss.Outpatient.view.edit.diagnosis-edit',
        'Jss.Outpatient.view.edit.instruction-edit',
        'Jss.Outpatient.view.examination.ExaminationSummary',
        'Jss.Outpatient.view.examination.ExaminationEdit',
        'Jss.Outpatient.view.treatment.TreatmentEdit',
        'Jss.Outpatient.view.treatment.TreatmentSummary',
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
