Ext.define('Jss.Outpatient.controller.ExaminationController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            examinationSummaryPanel : '#examinationSummaryPanel',
            observationsSummaryPanel:'#examination-observationSummaryPanel',
            addObservationsPanel:'#examination-addObservationsPanel',
        },

        control: {
            examinationSummaryPanel:{
                containerDoubleTab:'gotoEditPage'
            },
            addObservationsPanel: {
                observationDetailsCaptured: 'addObservation'
            },
            observationsSummaryPanel: {
                'editItem': 'editObservation'
            }
        }
    },

    gotoEditPage: function() {
        Ext.getCmp('mainview').push(Ext.getCmp('examination-card'));
    },

    addObservation:function (observation) {
        this.getObservationsSummaryPanel().addData(observation);
    },

    editObservation: function(observation) {
        this.getAddObservationsPanel().showForEdit(observation);
    },
});
