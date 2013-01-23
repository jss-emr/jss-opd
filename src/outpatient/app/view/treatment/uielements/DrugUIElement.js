Ext.define('Jss.Outpatient.view.treatment.uielements.DrugUIElement', {
    extend:'Ext.Container',

    config:{
        height:'100%',
        layout:'hbox',
    },

    for:function (medicineDetails) {
        this.medicineDetails = medicineDetails;
        this.specsList = this.addSpecsList();
        this.instructionsList = this.addInstructionList();
        this.dosageList = this.addDosageList();
        this.timingsList = this.addTimingsList();
        this.durationList = this.addDurationList();
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
        return this.medicineDetails.data.name + " | " + props.spec + " | " + props.instruction + " | " + props.dosage + " | " + props.timings.toString() + " | " + props.duration;
    },

    treatmentAdviceProperties:function () {
        return {
            spec:this.specsList.getSelectedValue(),
            instruction:this.instructionsList.getSelectedValue(),
            dosage:this.dosageList.getSelectedValue(),
            timings:this.timingsList.getSelectedValue(),
            duration: this.getDuration()
        }
    },

    addSpecsList:function () {
        if (this.medicineDetails.data.specs == null) {
            return null;
        }
        return this.addSelectionBox(this.medicineDetails.data.specs, "Specs", "20%");
    },

    addInstructionList:function () {
        return this.addMultiSelectionBox(this._instructionsList, "Instruction", "25%");
    },

    addDosageList:function () {
        var arrayData = ["1/4", "1/3", "1/2", "1", "2", "3"];
        return this.addSelectionBox(arrayData, "Dosage", "15%");
    },

    addTimingsList:function () {
        var arrayData = ["Morning", "Noon", "Evening", "Night"];
        return this.addMultiSelectionBox(arrayData, "Timings", "20%");
    },

    addDurationList: function() {
        this.durationQuantity = Ext.create("Jss.Outpatient.view.util.ArraySelectionBox", {
            width:'90%',
        }).addData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30]);

        this.durationUnit = Ext.create("Jss.Outpatient.view.util.ArraySelectionBox", {
            width:'90%',
        }).addData(["Days", "Weeks", "Months", "Years"]);

        this.add({
            xtype: "container",
            layout: "vbox",
            width: "20%",
            items: [
                {xtype:'toolbar', docked:'top', title:"Duration"},
                {xtype: 'panel', flex: 1, items:[this.durationQuantity]},
                {xtype: 'panel', flex: 1, items:[this.durationUnit, {xtype:'toolbar', docked:'top', title:"Unit"}]},
            ]
        })

        return this.durationQuantity;
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

    getDuration: function() {
        return this.durationQuantity.getSelectedValue() + " " + this.durationUnit.getSelectedValue();
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