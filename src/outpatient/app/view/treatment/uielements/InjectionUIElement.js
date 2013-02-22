Ext.define('Jss.Outpatient.view.treatment.uielements.InjectionUIElement', {
    extend:'Jss.Outpatient.view.treatment.uielements.BaseUIElement',

    config:{
        height:'100%',
        layout:'hbox',
    },

    for:function (medicineDetails) {
        this.medicineDetails = medicineDetails;
        this.specsAndModeList=this.addSpecAndModeList();
        this.instructionsList = this.addInstructionList();
        this.dosageList = this.addDropsList();
        this.timingsList = this.addTimingsList();
        this.durationList = this.addDurationList();
        return this;
    },

    showForEdit: function(treatmentAdviceProperties) {
        this.specsList.selectRecord(treatmentAdviceProperties.spec, 'value');
        this.modeList.selectRecord(treatmentAdviceProperties.mode, 'value');
        this.dosageList.selectRecord(treatmentAdviceProperties.dosage, 'value');
        if(treatmentAdviceProperties.instruction)
            this.instructionsList.selectRecord(treatmentAdviceProperties.instruction, 'value');
        if(treatmentAdviceProperties.timings)
            this.timingsList.selectRecord(treatmentAdviceProperties.timings, 'value');
        if(treatmentAdviceProperties.duration)
            this.selectDurationForEdit(treatmentAdviceProperties.duration);
    },

    getSummary:function () {
        var props = this.treatmentAdviceProperties;
        return {full: [this.medicineDetails.get('name'), props.spec, props.mode, props.instruction, props.dosage, props.timings.toString(), props.duration],
                short: [this.medicineDetails.get('name'), props.spec, props.mode, props.timings.toString()] };
    },

    getTreatmentAdviceProperties:function () {
        this.treatmentAdviceProperties = {
            spec: this.specsList != undefined ? this.specsList.getSelectedValue() : null,
            instruction:this.instructionsList.getSelectedValue(),
            dosage:this.dosageList.getSelectedValue(),
            timings:this.timingsList.getSelectedValue(),
            duration: this.getDuration(),
            mode:this.modeList.getSelectedValue(),
        }
        return this.treatmentAdviceProperties;
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

    addDropsList:function () {
        var arrayData = ["1/2ml", "1ml", "2ml", "3ml", "4ml", "5ml", "10ml", "15ml"];
        return this.addSelectionBox(arrayData, "Dosage", "15%");
    },

    addTimingsList:function () {
        var arrayData = ["Morning", "Noon", "Evening", "Night"];
        return this.addMultiSelectionBox(arrayData, "Timings", "20%");
    },
});