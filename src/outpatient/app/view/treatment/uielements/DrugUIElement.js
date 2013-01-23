Ext.define('Jss.Outpatient.view.treatment.uielements.DrugUIElement', {
    extend:'Jss.Outpatient.view.treatment.uielements.BaseUIElement',

    for:function (medicineDetails) {
        this.medicineDetails = medicineDetails;
        this.specsList = this.addSpecsList();
        this.instructionsList = this.addInstructionList();
        this.dosageList = this.addDosageList();
        this.timingsList = this.addTimingsList();
        this.durationList = this.addDurationList();
        return this;
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
        return this.addSelectionBox(this.medicineDetails.data.specs, "Specs", "20%").autoSelectSingleElement();
    },

    addDosageList:function () {
        var arrayData = ["1/4", "1/3", "1/2", "2/3", "3/4", "1", "2", "3"];
        return this.addSelectionBox(arrayData, "Dosage", "15%");
    },
});