Ext.define('Jss.Outpatient.controller.HistoryController', {
    extend:'Ext.app.Controller',
    config:{
        refs:{
            historySummaryPanel:'#historySummaryPanel',
            addObservationsPanel:'#history-addObservationsPanel',
            observationsSummaryPanel:'#history-observationsSummaryPanel',
        },
        control:{
            historySummaryPanel:{
                containerDoubleTab:'gotoEditPage'
            },

            addObservationsPanel: {
                observationDetailsCaptured: 'addObservation',
                observationDeleted: 'deleteObservation',
            },
            observationsSummaryPanel: {
                'editItem': 'editObservation'
            }
        }
    },

    gotoEditPage:function () {
        Ext.getCmp('mainview').setActiveItem(Ext.getCmp('history-card'));
    },

    addObservation:function (observation) {
        this.getObservationsSummaryPanel().addData(observation);
    },

    editObservation: function(observation) {
        this.getAddObservationsPanel().showForEdit(observation);
    },

    deleteObservation: function(concept) {
        this.getObservationsSummaryPanel().deleteObservation(concept);
    }
});