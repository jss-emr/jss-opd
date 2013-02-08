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
        var self = this;
        var sections = template.get('sections');
        sections.examinations.forEach(function(examination) {
            Ext.getStore('ExaminationObservations').add(self._createObservation(examination));
        });
        sections.history.forEach(function(history) {
            Ext.getStore('HistoryObservations').add(self._createObservation(history));
        });

        Ext.getCmp('mainview').pop();
    },

    _createObservation: function(concept) {
        var conceptModel = new Jss.Outpatient.model.concept.Concept(concept);
        return new Jss.Outpatient.model.concept.Observation({concept: conceptModel, value: null, summary: null, name: concept.name});
    }
});