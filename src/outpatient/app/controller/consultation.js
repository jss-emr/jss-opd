var myRecord; // for the record of current patient
var opd_observations = new Array(); //contains the observations of different tabs

Ext.define('Jss.Outpatient.controller.consultation', {
    extend: 'Ext.app.Controller',
    config: {
        refs: { // all the fields are accessed in the controller through the id of the components 
            main: '#mainview',
            contacts: 'patientlist',
            contact: '#contact',
            name: '#name',
            docname: '#docname',
            urgency: '#urgency',
            lastvisit: '#lastvisit',
            refresh: '#refresh',
            mainTabs: '#maintabs',
            cheifComplaint: '#cheifComplaint',
            examlist: '#examList',
            signlist: '#signList',
            deleteComplaint: '#deleteComplaint',
            addduration: '#addDuration',
            saveduration: '#saveDuration',
            submithistory: '#submit-history',
            submitdrugs: '#submitDrugs',
            signfilterbysearchfield: '#signfilterbysearchfield',
            vitalsGrid : '#vitalsGrid',
        },

        control: { //to perform action on specific component accessed through it's id above 
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            contacts: {
                itemtap: 'onContactSelect'
            },
            signlist: {
                itemtap: 'onSignListSelect'
            },
            examlist: {
                itemtap: 'onExamListSelect'
            },
            name: {
                tap: 'sortByName'
            },
            docname: {
                tap: 'sortByDocName'
            },
            urgency: {
                tap: 'sortByUrgency'
            },
            lastvisit: {
                tap: 'sortByLastVisit'
            },
            refresh: {
                tap: 'refreshList'
            },
            searchfield: {
                clearicontap: 'patientListOnSearchClearIconTap',
                keyup: 'patientListOnSearchKeyUp'
            },
            signfilterbysearchfield: {
                clearicontap: 'signFilterByOnSearchClearIconTap',
                keyup: 'signFilterByOnSearchKeyUp'
            },
            diagnosisfilterbysearchfield: {
                clearicontap: 'diagnosisFilterByOnSearchClearIconTap',
                keyup: 'diagnosisFilterByOnSearchKeyUp'
            },
            cheifComplaint: {
                change: 'addChiefComplaint',
            },
            deleteComplaint: {
                tap: 'deleteComplaint',
            },
            saveduration: {
                tap: 'saveduration',
            },
            addduration: {
                tap: 'addduration',
            }
        }
    },
    //this function starts on the load of the module
    init: function () {
        this.getpatientlist();
    },
    //fetches patient list who are screened but not not have an OPD encounter
    getpatientlist: function () {

    },

    addChiefComplaint: function () {
        var combo = Ext.getCmp('cheifComplaint');
        examlist = Ext.getCmp('examList');
        examlist.getStore().add({
            Complaint: combo.getValue(),
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
    //to perform actions on toolbar buttion of navigation view
    buttonAction: function (obj, obj2) {
        this.obj1 = Ext.create(obj);
        this.obj1.setRecord(myRecord);
        this.getMain().push(this.obj1);
        this.buttonShow(obj2);
    },

    buttonShow: function (obj) {
        var button = Ext.getCmp(obj);

        if (!button.isHidden()) {
            return;
        }

        button.setHidden(false);
    },

    buttonHide: function (obj) {
        var button = Ext.getCmp(obj);

        if (button.isHidden()) {
            return;
        }

        button.setHidden(true);
    },
    //for shorting the patient list
    sortBy: function (obj, listStore) {
        listStore.setSorters(obj);
        listStore.load({
            scope: this,
            callback: function(records, operation, success){
                if(success){
                }
                else{
                    Ext.Msg.alert("Error", Util.getMessageLoadError());
                }
            }
        });
    },

    sortByName: function () {
        this.sortBy('display', this.getContact().getStore());
    },

    sortByDocName: function () {
        this.sortBy('nameofdoc', this.getContact().getStore());
    },

    sortByUrgency: function () {
        this.sortBy('urgency', this.getContact().getStore());
    },

    sortByLastVisit: function () {
        this.sortBy('lastvisit', this.getContact().getStore());
    },

    refreshList: function () {
        this.getContact().getStore().load({
            scope: this,
            callback: function(records, operation, success){
                if(success){
                }
                else{
                    Ext.Msg.alert("Error", Util.getMessageLoadError());
                }
            }
        });
    },
        // for serching in the list
    onSearchKeyUp: function (listStore, field, value1, value2) {

        var value = field.getValue();
        var store = listStore;

        store.clearFilter();

        if (value) {
            var searches = value.split(' ');
            var regexps = [];
            var i;

            for (i = 0; i < searches.length; i++) {
                if (!searches[i]) continue;
                regexps.push(new RegExp(searches[i], 'i'));
            }

            store.filter(function (record) {
                var matched = [];

                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i];
                    var didMatch = record.get(value1).match(search) || record.get(value2).match(search);
                    matched.push(didMatch);
                }

                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    return matched[0];
                }
            });
        }
    },
    // called when clear icon in the search field is clicked
    onSearchClearIconTap: function (listStore) {
        listStore.clearFilter();
    },
    //called when sign list is clicked or selected
    onSignListSelect: function (list, index, node, record) {
        var sign = record.data.sign;
        list.getStore().remove(record);
        examlist = Ext.getCmp('examList');
        examlist.getStore().add({
            Complaint: sign,
            id: sign,
        });
    },
    // to filter the search in the signlist
    signFilter: function () {
        var value = Ext.getCmp('signFilter').getValue();
        var store = Ext.getCmp('signList').getStore();

        if (value) {
            var searches = value.split(' ');
            var regexps = [];
            var i;

            for (i = 0; i < searches.length; i++) {
                if (!searches[i]) continue;
                regexps.push(new RegExp(searches[i], 'i'));
            }

            store.filter(function (record) {
                var matched = [];

                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i];
                    var didMatch = record.get('type').match(search);
                    matched.push(didMatch);
                }

                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    return matched[0];
                }
            });
        }
    },
    //for searching in the signlist
    signFilterByOnSearchKeyUp: function (field) {
        Ext.getCmp('signList').setHidden(false);
        Ext.getCmp('signList').getStore().load({
            scope: this,
            callback: function(records, operation, success){
                if(success){
                }
                else{
                    Ext.Msg.alert("Error", Util.getMessageLoadError());
                }
            }
        });
        this.onSearchKeyUp(Ext.getCmp('signList').getStore(), field, 'sign', 'type');
        this.signFilter();
    },

    signFilterByOnSearchClearIconTap: function () {
        this.onSearchClearIconTap(Ext.getCmp('signList').getStore());
    },
    //This function is called on every event on searchfield
    diagnosisFilterByOnSearchClearIconTap: function () {
        this.onSearchClearIconTap(Ext.getCmp('diagnosisList').getStore());
    }
       
});
