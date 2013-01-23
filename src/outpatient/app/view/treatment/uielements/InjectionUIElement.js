Ext.define('Jss.Outpatient.view.treatment.uielements.InjectionUIElement', {
    extend:'Ext.Container',

    config:{
        height:'100%',
        layout:'hbox',
    },

    for:function (medicineDetails) {
        this.medicineDetails = medicineDetails;
        this.specsAndModeList=this.addSpecAndModeList();
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
        return this.medicineDetails.get('name') + " | " + props.spec + " | " + props.mode +  " | " + props.instruction + " | " + props.dosage + " | " + props.timings.toString() + " | " + props.duration;
    },

    treatmentAdviceProperties:function () {
        return {
            spec:this.specsList.getSelectedValue(),
            instruction:this.instructionsList.getSelectedValue(),
            dosage:this.dosageList.getSelectedValue(),
            timings:this.timingsList.getSelectedValue(),
            duration: this.getDuration(),
            mode:this.modeList.getSelectedValue(),
        }
    },

    addSpecAndModeList: function() {
        var firstColumn = Ext.create('Ext.Container', {
            layout: "vbox",
            width: "20%",
        });

        if(this.medicineDetails.data.specs != null) {
            this.specsList = Ext.create("Jss.Outpatient.view.util.ArraySelectionBox", {
                width:'90%',
            }).addData(this.medicineDetails.data.specs).autoSelectSingleElement();
            firstColumn.add({xtype: 'container', flex: 1, items: [this.specsList, {xtype: 'titlebar', docked: 'top', title: 'Specs'}]});
        }

        this.modeList = Ext.create("Jss.Outpatient.view.util.ArraySelectionBox", {
            width:'90%',
        }).addData(["IV","IM","ID"]);
        firstColumn.add({xtype: 'container', flex: 1, items: [this.modeList, {xtype: 'titlebar', docked: 'top', title: 'Mode'}]});

        this.add(firstColumn);

        return firstColumn;
    },


    addInstructionList:function () {
        return this.addMultiSelectionBox(this._instructionsList, "Instruction", "25%");
    },

    addDosageList:function () {
        var arrayData = ["1/2ml", "1ml", "2ml", "3ml", "4ml", "5ml", "10ml", "15ml"];
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