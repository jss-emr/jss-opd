Ext.define('Jss.Outpatient.controller.DiagnosisController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            diagnosisSummaryPanel: '#diagnosisSummaryPanel',
            observationsSummaryPanel:'#diagnosis-observationSummaryPanel',
            addObservationsPanel:'#diagnosis-addObservationsPanel',
        },

        control: {
            diagnosisSummaryPanel: {
                containerDoubleTab: 'gotoEditPage'
            },
            addObservationsPanel: {
                observationDetailsCaptured: 'addObservation',
                observationDeleted: 'deleteObservation',
            },
        }
    },

    gotoEditPage: function() {
        Ext.getCmp('diagnosis-card').activate();
    },

    addObservation: function(observation) {
        this.getObservationsSummaryPanel().addData(observation);
    },

    deleteObservation: function(concept) {
        this.getObservationsSummaryPanel().deleteObservation(concept);
    },
});