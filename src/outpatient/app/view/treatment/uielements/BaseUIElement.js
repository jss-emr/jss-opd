Ext.define('Jss.Outpatient.view.treatment.uielements.BaseUIElement', {
    extend:'Ext.Container',

    config:{
        height:'100%',
        layout:'hbox',
    },

    for:function (medicineDetails) {
        this.medicineDetails = medicineDetails;
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
        return "";
    },

    isDefault: function() {
        return false;
    },

    treatmentAdviceProperties:function () {
        return { }
    },

    addInstructionList:function () {
        return this.addMultiSelectionBox(this._instructionsList, "Instruction", "25%");
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
            id: title + "uuid",
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