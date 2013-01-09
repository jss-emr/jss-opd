Ext.define('Jss.Outpatient.view.treatment.TreatmentEdit', {
    extend: 'Ext.Panel',
    alias: 'widget.treatmentEdit',
    id: 'treatmentEdit',

    requires : [
        'Jss.Outpatient.view.treatment.TreatmentAdviceGrid',
        'Jss.Outpatient.view.treatment.AddTreatmentAdvice',
        'Jss.Outpatient.view.treatment.new.AutocompleteListBox',
        'Jss.Outpatient.view.treatment.new.AutocompleteContainer',
        'Jss.Outpatient.view.treatment.new.ArraySelectionBox',
        'Jss.Outpatient.view.treatment.new.AddTreatmentAdviceDetailsPanel',
    ],

    config: {
        layout: 'vbox',
        autoScroll:true,
        autoDestroy: false,
        fullscreen: true,
        activeItem: 1,
        items: [
            {
                xtype : 'treatment_advice_grid',
                flex: 1,
            },
            {
                xtype : 'add_treatment_advice',
                flex: 2,
            }
        ]
    }
});
