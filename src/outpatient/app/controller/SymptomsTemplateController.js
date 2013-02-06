Ext.define('Jss.Outpatient.controller.SymptomsTemplateController', {
    extend:'Ext.app.Controller',
    config:{
        refs:{
            symptomsTemplateButton: "#symptomsTemplateButton",
            symptomsTemplateSelect: "#symptomsTemplateSelect"

        },
        control:{
            symptomsTemplateButton:{
                tap:'gotoSelectTemplatePage'
            },
            symptomsTemplateSelect: {
                symptomsTemplateSelected: 'applyTemplate'
            }

        }
    },

    gotoSelectTemplatePage:function () {
        Ext.getCmp('mainview').push(Ext.getCmp('symptomsTemplateSelect-card'));
    },

    applyTemplate: function(template) {
        var sections = template.get('sections');
        sections.examinations.forEach(function(examination) {
            Ext.getStore('ExaminationObservations').add(new Jss.Outpatient.model.concept.Observation({
                concept: examination,
                value: {},
                summary: null
            }));
        });
        sections.history.forEach(function(history) {
            Ext.getStore('HistoryObservations').add(new Jss.Outpatient.model.concept.Observation({
                concept: history,
                value: {},
                summary: null
            }));
        });

        Ext.getCmp('mainview').pop();
    }
});