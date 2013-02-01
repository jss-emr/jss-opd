Ext.define('Jss.Outpatient.controller.DiagnosisController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            diagnosisSummaryPanel: '#diagnosisSummaryPanel',
            observationsSummaryPanel:'#diagnosis-observationSummaryPanel',
            addObservationsPanel:'#diagnosis-addObservationsPanel',
            diseaseTemplate: '#diseaseTemplate',
        },

        control: {
            diagnosisSummaryPanel: {
                containerDoubleTab: 'gotoEditPage'
            },
            addObservationsPanel: {
                observationDetailsCaptured: 'addObservation'
            },
            diseaseTemplate: {
                select: 'diseaseTemplateSelected'
            }
        }
    },

    gotoEditPage: function() {
        Ext.getCmp('mainview').push(Ext.getCmp('diagnosis-card'));
    },

    addObservation: function(observation) {
        this.getObservationsSummaryPanel().getStore().add(observation);
    },

    diseaseTemplateSelected: function(list, diseaseTemplate) {
        var sections = diseaseTemplate.get('sections');
        sections.examinations.forEach(function(examination) {
            var allExaminations = Ext.getStore('ExaminationConcepts');
            Ext.getStore('ExaminationQueue').add(allExaminations.findRecord('name', examination.conceptName));
        });
        sections.history.forEach(function(history) {
            var historyConcepts = Ext.getStore('HistoryConcepts');
            Ext.getStore('HistoryQueue').add(historyConcepts.findRecord('name', history.conceptName));
        });
    }
});