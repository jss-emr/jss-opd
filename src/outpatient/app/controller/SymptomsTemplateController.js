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
            // Ext.getStore('ExaminationQueue').add(examination);
        });
        sections.history.forEach(function(history) {
            // Ext.getStore('HistoryQueue').add(history);
        });

        Ext.getCmp('mainview').pop();
    }
});