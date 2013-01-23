Ext.define('Jss.Outpatient.view.treatment.uielements.CreamUIElement', {
    extend:'Jss.Outpatient.view.treatment.uielements.BaseUIElement',

    for:function (medicineDetails) {
        this.medicineDetails = medicineDetails;
        this.specsList = this.addSpecsList();
        this.instructionsList = this.addInstructionList();
        this.timingsList = this.addTimingsList();
        this.durationList = this.addDurationList();
        return this;
    },

    getSummary:function () {
        var props = this.treatmentAdviceProperties();
        return this.medicineDetails.data.name + " | " + props.spec + " | " + props.instruction  + " | " + props.timings.toString() + " | " + props.duration;
    },

    treatmentAdviceProperties:function () {
        return {
            spec: this.specsList != undefined ? this.specsList.getSelectedValue() : null,
            instruction:this.instructionsList.getSelectedValue(),
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
});