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

    applyTemplate: function(template, mapping) {
        var self = this;
        var sections = template.get('sections');
        Ext.getStore('SymptomsTemplates').remove(template);
        sections.examinations.forEach(function(examination) {
            var uiElement = mapping[examination.name];
            var observation = uiElement !== undefined ? uiElement.getValue() : self._createObservation(examination);
            Ext.getStore('ExaminationObservations').add(observation);
        });
        sections.history.forEach(function(history) {
            var uiElement = mapping[history.name];
            var observation = uiElement !== undefined ? uiElement.getValue() : self._createObservation(history);
            Ext.getStore('HistoryObservations').add(observation);
        });

        sections.instructions.forEach(function(instruction) {
            var uiElement = mapping[instruction.name];
            var observation = uiElement !== undefined ? uiElement.getValue() : self._createObservation(instruction);
            Ext.getStore('Instructions').add(observation);
        });

        Ext.getCmp('mainview').pop();
    },

    _createObservation: function(concept) {
        var conceptModel = new Jss.Outpatient.model.concept.Concept(concept);

        var summary = conceptModel.getDatatype() == "N/A" ? concept.name : null;
        return new Jss.Outpatient.model.concept.Observation({concept: conceptModel, value: null, summary: summary, name: concept.name});
    }
});