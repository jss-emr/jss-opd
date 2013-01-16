Ext.define('Jss.Outpatient.view.treatment.TreatmentEdit', {
    extend: 'Ext.Panel',
    alias: 'widget.treatmentEdit',
    id: 'treatmentEdit',

    requires : [
        'Jss.Outpatient.view.treatment.TreatmentAdviceGrid',
        'Jss.Outpatient.view.treatment.AddTreatmentAdvice',
        'Jss.Outpatient.view.treatment.new.ArraySelectionBox',
        'Jss.Outpatient.view.treatment.new.AddTreatmentAdviceDetailsPanel',
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
