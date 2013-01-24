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
                jsstouchstart: 'gotoEditPage'
            },
            addObservationsPanel: {
                observationDetailsCaptured: 'addObservation'
            },
        }
    },

    gotoEditPage: function() {
        Ext.getCmp('mainview').push(Ext.getCmp('diagnosis-card'));
    },

    addObservation: function(observation) {
        this.getObservationsSummaryPanel().getStore().add(observation);
    }
});