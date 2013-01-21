Ext.define('Jss.Outpatient.view.treatment.uielements.DrugUIElement', {
    extend:'Ext.Container',

    config:{
        height:300,
        flex:1,
        scrollable:'false',
        layout:'hbox',
    },

    for:function (medicineDetails) {
        this.medicineDetails = medicineDetails;
        this.specsList = this.addSpecsList();
        this.instructionsList = this.addInstructionList();
        this.dosageList = this.addDosageList();
        this.timingsList = this.addTimingsList();
        return this;
    },

    getValue:function () {
        return Ext.create('Jss.Outpatient.model.treatment.TreatmentAdvice', {
            name: this.medicineDetails.data.name,
            medicineDetails: this.medicineDetails.data,
            properties: this.treatmentAdviceProperties,
            summary: this.getSummary()
        });
    },

    getSummary:function () {
        var props = this.treatmentAdviceProperties();
        return this.medicineDetails.data.name + " | " +  props.spec + " | " + props.instruction + " | " + props.dosage + " | " + props.timings.toString();
    },

    isValid:function () {
        return true;
    },

    treatmentAdviceProperties : function() {
        return {
            spec: this.specsList.getSelectedValue(),
            instruction: this.instructionsList.getSelectedValue(),
            dosage: this.dosageList.getSelectedValue(),
            timings: this.timingsList.getSelectedValue()
        }
    },

    addSpecsList:function(){
        if(this.medicineDetails.data.specs == null){
            return null;
        }
        var widget = Ext.create("Jss.Outpatient.view.util.ArraySelectionBox", {
            height: 300,
            width: '80%',
        }).addData(this.medicineDetails.data.specs);

        this.addWithTitle(widget, "Specs", "10%");
        return widget;
    },

    addInstructionList:function(){
        var widget = Ext.create("Jss.Outpatient.view.util.ArraySelectionBox",{
            height:300,
            width:'80%',
        }).addData(this._instructionsList);

        this.addWithTitle(widget, "Instruction", "20%");
        return widget;
    },

    addDosageList:function(){
        var widget = Ext.create("Jss.Outpatient.view.util.ArraySelectionBox",{
            height:300,
            width:'80%',
        }).addData(["1/4","1/3","1/2","1","2","3"]);

        this.addWithTitle(widget, "Dosage", "10%");
        return widget;
    },

    addTimingsList:function(){
        var widget = Ext.create("Jss.Outpatient.view.util.ArrayMultiSelectionBox",{
            height:300,
            width:'80%',
        }).addData(["Morning", "Noon", "Evening", "Night"]);

        this.addWithTitle(widget, "Timings", "20%");
        return widget;
    },

    highlightErrors:function () {
        //do nothing
    },

    addWithTitle : function(widget, title, width) {
        this.add({
            xtype: 'panel',
            width: width,
            height: 300,
            items: [widget, {xtype: 'toolbar', docked: 'top', title: title}],
        });
    },

    _instructionsList: [
        "Once a day",
        "Twice a day",
        "Thrice a day",
        "four times a day",
        "six times a day",
        "before sleep",
        "Before meal",
        "After meal",
        "With meals",
        "Weekly",
        "twice a Week",
        "Thrice a week",
        "Once in three weeks",
        "Monthly",
        "S.O.S",
    ]
});