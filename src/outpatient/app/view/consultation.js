Ext.define('Jss.Outpatient.view.consultation', {
    extend: 'Ext.Container',
    alias: 'widget.consultation',
    id: 'consultationPanel',

    config: {
        layout: 'card',
        title: 'Consultation',
        items:[{
            layout: 'hbox',
            style: 'background-color: #FFFFFF',
            title: 'Consultation',
            id:'consultation',
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: 'vbox',
                    style: 'background-color: #F5F5F5',
                    items: [
                        {
                            xtype: 'historySummary',
                            flex: 2,
                        },{
                            xtype: 'diagnosis',
                            id: 'diagnosisSummaryPanel',
                            flex: 1,
                        },{
                            xtype: 'instruction',
                            flex: 2,
                            id: 'instructionSummaryPanel',
                        }
                    ]
                },
                {
                    xtype: 'container',
                    id: 'bottom-panel',
                    layout: 'vbox',
                    flex: 1,
                    margin: "0 0 0 5",
                    style: 'background-color: #F5F5F5',
                    items: [
                        {
                            xtype: 'patient',
                            flex: 1,
                        },{
                            xtype: 'examinationSummary',
                            id: 'examinationSummaryPanel',
                            flex: 1,
                        },{
                            xtype: 'treatmentSummary',
                            id: 'treatmentSummaryPanel',
                            flex: 2,
                        }
                    ]
                }
            ]
        },{
            xtype: 'container',
            layout: 'vbox',
            title: 'Examination-Edit',
            id: 'examination-card',
            items: [{
                xtype: 'examinationEdit',
                id: 'examination-editpanel',
                flex: 1,
            }]
        },{
            layout: 'vbox',
            title: 'History-Edit',
            id: 'history-card',
            items: [{
                xtype: 'historyEdit',
                id: 'historyEditPanel',
                flex: 2,
            }]
        },{
            layout: 'vbox',
            title: 'SymptomsTemplate-Select',
            id: 'symptomsTemplateSelect-card',
            items: [{
                xtype: 'symptoms-template-select',
                id: 'symptomsTemplateSelect',
                flex: 2,
            }]
        },{
            layout: 'vbox',
            title: 'Diagnosis-Edit',
            id: 'diagnosis-card',
            items: [{
                xtype: 'diagnosis-edit',
                flex: 2,
            }]
        },{
            layout: 'vbox',
            title: 'Treatment-Edit',
            id: 'treatment-card',
            items: [{
                xtype: 'treatmentEdit',
                flex: 2,
            }]
        },{
            layout: 'vbox',
            title: 'Instruction-Edit',
            id: 'instruction-card',
            items: [{
                xtype: 'instruction-edit',
                flex: 2,
                html: 'Instruction',
            }]
        }]
    }
});
