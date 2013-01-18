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
                jsstouchstart:'gotoEditPage'
            },

            addObservationsPanel: {
                observationDetailsCaptured: 'addObservation'
            }
        }
    },

    gotoEditPage:function () {
        Ext.getCmp('mainview').push(Ext.getCmp('historyEditPanel'));
    },

    addObservation:function (observation) {
        this.getObservationsSummaryPanel().getStore().add(observation);
    }
});