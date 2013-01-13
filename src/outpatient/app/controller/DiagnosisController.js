Ext.define('Jss.Outpatient.controller.DiagnosisController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            diagnosisSelector: '#diagnosisSelector',
            diagnosisSummaryList: '#diagnosisSummaryList'
        },

        control: {
            diagnosisSelector: {
                initialize: 'flagInitialize',
                change: 'addDiagnosis', //this is fired even when selectbox loads.
            },
        }
    },

    flagInitialize : function() {
        this.diagnosisSelectorJustInitialized = true
    },

    addDiagnosis: function() {
        if(this.diagnosisSelectorJustInitialized == true) {
            this.diagnosisSelectorJustInitialized = false;
            return;
        }

        this.getDiagnosisSummaryList().getStore().add(this.getDiagnosisSelector().getRecord());
    }
});