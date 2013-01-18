Ext.define('Jss.Outpatient.controller.HistoryController', {
    extend:'Ext.app.Controller',
    config:{
        refs:{
            historySummaryPanel:'#historySummaryPanel',
            observationDetailsPanel:'#addObservationDetailsPanel',
            observationAutoComplete:'#observationAutoComplete',
            addObservationButton:'#addObservationButton',
            addObservationsPanel:'#addObservationsPanel',
            observationsPanel:'#observationsPanel',
        },
        control:{
            historySummaryPanel:{
                jsstouchstart:'gotoEditPage'
            },
            observationAutoComplete:{
                itemSelected:'conceptSelected',
                clearicontap:'clear',
            },
            addObservationButton:{
                tap:'addObservation',
            }
        }
    },

    gotoEditPage:function () {
        Ext.getCmp('mainview').push(Ext.getCmp('historyEditPanel'));
    },

    conceptSelected:function (concept) {
        this.getAddObservationsPanel().itemSelected(concept);
    },

    clear:function () {
        this.getAddObservationsPanel().clear();
    },

    addObservation:function () {
        if(this.getObservationDetailsPanel().isValid()){
            this.clear();
            this.getObservationsPanel().addObservation(this.getObservationDetailsPanel().getObservationDetails());
        }
    }
});