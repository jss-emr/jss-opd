Ext.define('Jss.Outpatient.view.treatment.TreatmentEdit', {
    extend: 'Ext.Panel',
    alias: 'widget.treatmentEdit',
    id: 'treatmentEdit',

    requires : [
        'Jss.Outpatient.view.treatment.edit.TreatmentAdviceGrid',
        'Jss.Outpatient.view.treatment.edit.AddTreatmentAdvice',
        'Jss.Outpatient.view.treatment.edit.AddTreatmentAdviceDetailsPanel',
    ],

    config: {
        layout: 'vbox',
        autoDestroy: false,
        title: 'Treatment Advice',
        items: [
            {
                xtype : 'treatmentAdviceGrid',
                flex: 1,
            },
            {
                xtype : 'addTreatmentAdvice',
                flex: 2,
            }
        ]
    }
});
