Ext.define('Jss.Outpatient.controller.InstructionController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            instructionSelector: '#instructionSelector',
            instructionSummaryList: '#instructionSummaryList',
            instructionSummaryPanel: '#instructionSummaryPanel',
            addObservationsPanel:'#instruction-addObservationsPanel',
            observationsSummaryPanel:'#instruction-observationSummaryPanel'
        },
        control: {
            instructionSummaryPanel:{
                containerDoubleTab:'gotoEditPage'
            },
            addObservationsPanel: {
                observationDetailsCaptured: 'addObservation'
            }
        }
    },

    gotoEditPage: function() {
        Ext.getCmp('mainview').push(Ext.getCmp('instruction-card'));
    },

    addObservation: function(observation) {
        this.getObservationsSummaryPanel().getStore().add(observation);
    },

});