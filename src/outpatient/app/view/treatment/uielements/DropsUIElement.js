Ext.define('Jss.Outpatient.view.treatment.uielements.DropsUIElement', {
    extend:'Jss.Outpatient.view.treatment.uielements.BaseUIElement',

    for:function (medicineDetails) {
        this.medicineDetails = medicineDetails;
        this.specsList = this.addSpecsList();
        this.instructionsList = this.addInstructionList();
        this.dropsList = this.addDropsList();
        this.timingsList = this.addTimingsList();
        this.durationList = this.addDurationList();
        return this;
    },

    getSummary:function () {
        var props = this.treatmentAdviceProperties();
        return this.medicineDetails.data.name + " | " + props.spec + " | " + props.instruction + " | " + props.drops + " | " + props.timings.toString() + " | " + props.duration;
    },

    treatmentAdviceProperties:function () {
        return {
            spec: this.specsList != undefined ? this.specsList.getSelectedValue() : null,
            instruction:this.instructionsList.getSelectedValue(),
            drops:this.dropsList.getSelectedValue(),
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

    addDropsList:function () {
        var arrayData = ["1", "2", "3", "4", "5", "10", "15"];
        return this.addSelectionBox(arrayData, "Drops", "15%");
    },
});