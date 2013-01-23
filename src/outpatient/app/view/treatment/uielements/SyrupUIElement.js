Ext.define('Jss.Outpatient.view.treatment.uielements.SyrupUIElement', {
    extend:'Ext.Container',

    config:{
        height:'100%',
        layout:'hbox',
    },

    for:function (medicineDetails) {
        this.medicineDetails = medicineDetails;
        this.specsList = this.addSpecsList();
        this.instructionsList = this.addInstructionList();
        this.quantityList = this.addQuantityList();
        this.timingsList = this.addTimingsList();
        return this;
    },

    getValue:function () {
        return Ext.create('Jss.Outpatient.model.treatment.TreatmentAdvice', {
            name:this.medicineDetails.data.name,
            medicineDetails:this.medicineDetails.data,
            properties:this.treatmentAdviceProperties,
            summary:this.getSummary()
        });
    },

    getSummary:function () {
        var props = this.treatmentAdviceProperties();
        return this.medicineDetails.data.name + " | " + props.spec + " | " + props.instruction + " | " + props.timings.toString() + " | " + props.quantity;
    },

    treatmentAdviceProperties:function () {
        return {
            spec:this.specsList.getSelectedValue(),
            instruction:this.instructionsList.getSelectedValue(),
            timings:this.timingsList.getSelectedValue(),
            quantity: this.quantityList.getSelectedValue(),
        }
    },

    addSpecsList:function () {
        if (this.medicineDetails.data.specs == null) {
            return null;
        }
        return this.addSelectionBox(this.medicineDetails.data.specs, "Specs", "25%").autoSelectSingleElement();
    },

    addInstructionList:function () {
        return this.addMultiSelectionBox(this._instructionsList, "Instruction", "25%");
    },

    addQuantityList:function () {
        var arrayData = ["1 bottle", "2bottle", "3 bottle"];
        return this.addSelectionBox(arrayData, "Dosage", "25%");
    },

    addTimingsList:function () {
        var arrayData = ["Morning", "Noon", "Evening", "Night"];
        return this.addMultiSelectionBox(arrayData, "Timings", "20%");
    },

    addSelectionBox:function (arrayData, title, width) {
        var widget = Ext.create("Jss.Outpatient.view.util.ArraySelectionBox", {
            width:'90%',
        }).addData(arrayData);
        this.addTitle(widget, title, width);
        return widget;
    },

    addMultiSelectionBox:function (arrayData, title, width) {
        var widget = Ext.create("Jss.Outpatient.view.util.ArrayMultiSelectionBox", {
            width:'90%',
        }).addData(arrayData);
        this.addTitle(widget, title, width);
        return widget;
    },

    addTitle:function (widget, title, width) {
        this.add({
            xtype:'panel',
            width:width,
            layout: 'fit',
            items:[widget, {xtype:'toolbar', docked:'top', title:title}],
        });
    },

    _instructionsList:[
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