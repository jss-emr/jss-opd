Ext.define('Jss.Outpatient.controller.InstructionController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            instructionSummaryPanel: '#instructionSummaryPanel',
            addObservationsPanel:'#instruction-addObservationsPanel',
            observationsSummaryPanel:'#instruction-observationSummaryPanel',
            optionsPanel:'#optionsPanel'
        },
        control: {
            instructionSummaryPanel:{
                containerDoubleTab:'gotoEditPage'
            },
            addObservationsPanel: {
                observationDetailsCaptured: 'addObservation',
                observationDeleted: 'deleteObservation',
            },
            observationsSummaryPanel: {
                editItem: 'editObservation'
            }

        }
    },
    gotoEditPage: function() {
        Ext.getCmp('instruction-card').activate();
    },

    addObservation: function(observation) {
        this.getObservationsSummaryPanel().addData(observation);
    },

    editObservation: function(observation) {
        this.getAddObservationsPanel().showForEdit(observation);
    },

    deleteObservation: function(concept) {
        this.getObservationsSummaryPanel().deleteObservation(concept);
    },
});