Ext.define('Jss.Outpatient.view.treatment.TreatmentEdit', {
    extend: 'Ext.Panel',
    alias: 'widget.treatmentEdit',
    id: 'treatmentEdit',

    requires : [
        'Jss.Outpatient.view.treatment.edit.AddTreatmentAdvice',
        'Jss.Outpatient.view.treatment.edit.AddTreatmentAdviceDetailsPanel',
        'Jss.Outpatient.view.treatment.uielements.Factory',
    ],

    config: {
        layout: 'vbox',
        autoDestroy: false,
        title: 'Treatment Advice',
        items: [
            {
                xtype : 'list',
                id: 'treatmentEditSummaryPanel',
                store: 'TreatmentAdvice',
                itemTpl: Ext.create('Jss.Outpatient.view.treatment.FullSummaryTemplate'),
                flex: 1,
                cls: 'observationSummary',
                selectedCls: '',
                inline: true,
            },
            {
                xtype : 'addTreatmentAdvice',
                id: 'addTreatmentAdvicePanel',
                autoCompleteCategory: 'Medicine',
                flex: 2,
            }
        ]
    },

    initialize: function() {
        this.summaryPanel = Ext.getCmp('treatmentEditSummaryPanel');
        this.addAdvicePanel = Ext.getCmp('addTreatmentAdvicePanel');

        this.summaryPanel.on('itemtap', this.showForEdit, this);
    },

    showForEdit: function(list, index, target, record) {
        this.addAdvicePanel.showForEdit(record);
    },
});
