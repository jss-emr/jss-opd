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
                            id: 'historySummaryPanel',
                            cls: 'opdSection',
                            flex: 2,
                        },{
                            xtype: 'diagnosis',
                            id: 'diagnosisSummaryPanel',
                            flex: 1,
                            cls: 'opdSection',
                        },{
                            xtype: 'instruction',
                            flex: 2,
                            id: 'instructionSummaryPanel',
                            cls: 'opdSection',
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
                            cls: 'opdSection',
                            flex: 1,
                        },{
                            xtype: 'treatmentSummary',
                            id: 'treatmentSummaryPanel',
                            cls: 'opdSection',
                            flex: 2,
                        }
                    ]
                }
            ]
        }]
    },


    initialize: function() {
        Ext.create('Jss.Outpatient.view.ContainerWithHeader', {
            title: 'Examinations',
            id: 'examination-card',
            content: [{
                xtype: 'examinationEdit',
                id: 'examination-editpanel',
                flex: 2,
            }]
        });

        Ext.create('Jss.Outpatient.view.ContainerWithHeader', {
            title: 'History & Symptoms',
            id: 'history-card',
            content: [{
                xtype: 'historyEdit',
                id: 'historyEditPanel',
                flex: 2,
            }]
        });

        Ext.create('Jss.Outpatient.view.ContainerWithHeader', {
            title: 'Select SymptomsTemplate',
            id: 'symptomsTemplateSelect-card',
            content: [{
                xtype: 'symptoms-template-select',
                id: 'symptomsTemplateSelect',
                flex: 2,
            }]
        });

        Ext.create('Jss.Outpatient.view.ContainerWithHeader', {
            title: 'Diagnosis',
            id: 'diagnosis-card',
            content: [{
                xtype: 'diagnosis-edit',
                flex: 2,
            }]
        });

        Ext.create('Jss.Outpatient.view.ContainerWithHeader', {
            title: 'Treatment',
            id: 'treatment-card',
            content: [{
                xtype: 'treatmentEdit',
                id: 'treatmentEditPanel',
                flex: 2,
            }]
        });

        Ext.create('Jss.Outpatient.view.ContainerWithHeader', {
            title: 'Instructions',
            id: 'instruction-card',
            content: [{
                xtype: 'instruction-edit',
                flex: 2,
            }]
        });
    },
});
