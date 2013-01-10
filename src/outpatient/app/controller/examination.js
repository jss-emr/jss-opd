Ext.define('Jss.Outpatient.controller.examination', {
    extend: 'Ext.app.Controller',
    config: {
        refs: { // all the fields are accessed in the controller through the id of the components
            name: '#name',
            chiefcomplaint: '#chiefcomplaint',
        },

        control: { //to perform action on specific component accessed through it's id above
            chiefcomplaint: {
                change: 'addChiefComplaint',
            },
            deletecomplaint: {
                tap: 'deleteComplaint',
            },
            saveduration: {
                tap: 'saveduration',
            },
            addduration: {
                tap: 'addduration',
            },
        }
    },
    //this function starts on the load of the module
    init: function () {
        this.loadPatient();
    },
    loadPatient: function (){

    }
    ,
    addChiefComplaint: function () {
        var combo = Ext.getCmp('chiefComplaint');
        examlist = Ext.getCmp('examList');
        examlist.getStore().add({
            complain: combo.getValue(),
            id: combo.getValue()
        });
        Ext.getCmp('maintabs').setActiveItem(TABS.EXAMINATION);
    },
    // called after selection of the examination list
    onExamListSelect: function (list, index, node, record) {
        Ext.getCmp('deleteComplaint').setHidden(false);
        Ext.getCmp('addDuration').setHidden(false);
    },
    //to delete something form examination list of sign list
    deleteComplaint: function () {
        var examlist = Ext.getCmp('examList');
        selectedRecord = examlist.getSelection();
        examlist.getStore().remove(selectedRecord);
    },
    //to add duration for a specefic problem/sign in the examlist
    addduration: function () {
        this.getMain().push(Ext.getCmp('durationPicker'));
        Ext.getCmp('durationPicker').setHidden(false);
    },
    //for saving the duaration
    saveduration: function () {
        var duration = Ext.getCmp('durationfield').getValue();
        var examlist = Ext.getCmp('examList');
        var selectedRecord = examlist.getSelection();
        var duration = Ext.getCmp('durationfield').getValue();
        var listdata = selectedRecord[0].set('duration', ' : ' + duration + ' days');
        Ext.getCmp('durationPicker').setHidden(true);
        Ext.getCmp('durationfield').reset();
    },

});
