Ext.define('Jss.Outpatient.controller.ExaminationController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            patientComplaints: '#patientComplaints',
            examinationSummaryPanel : '#examinationSummaryPanel'
        },

        control: { //to perform action on specific component accessed through it's id above
            patientComplaints: {
                initialize: 'flagInitialize',
                change: 'addComplaint', //this is fired even when selectbox loads.
            },
            examinationSummaryPanel:{
                jsstouchstart:'gotoEditPage'
            }
        }
    },
    flagInitialize: function() {
        this.patientComplaintsJustInitialized = true;
    },

    addComplaint: function () {
        if(this.patientComplaintsJustInitialized == true) {
            this.patientComplaintsJustInitialized = false;
            return;
        }
        var combo = Ext.getCmp('patientComplaints');
        var examinationSummary = Ext.getCmp('examinationSummaryPanel');
        examinationSummary.addComplaint(combo.getRecord());
    },
    gotoEditPage: function() {
        Ext.getCmp('mainview').push(Ext.getCmp('examination-editpanel'));
    }

});
