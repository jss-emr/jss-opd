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
        var props = this.treatmentAdviceProperties;
        return {full: [this.medicineDetails.get('name'), props.spec, props.instruction, props.drops, props.timings.toString(), props.duration],
                short: [this.medicineDetails.get('name'), props.spec, props.timings.toString()] };
    },

    getTreatmentAdviceProperties:function () {
        this.treatmentAdviceProperties = {
            spec: this.specsList != undefined ? this.specsList.getSelectedValue() : null,
            instruction:this.instructionsList.getSelectedValue(),
            drops:this.dropsList.getSelectedValue(),
            timings:this.timingsList.getSelectedValue(),
            duration: this.getDuration()
        }
        return this.treatmentAdviceProperties;
    },

    addDropsList:function () {
        var arrayData = ["1", "2", "3", "4", "5", "10", "15"];
        return this.addSelectionBox(arrayData, "Drops", "15%");
    },

    showForEdit: function(treatmentAdviceProperties) {
        this.specsList.selectRecord(treatmentAdviceProperties.spec, 'value');
        this.dropsList.selectRecord(treatmentAdviceProperties.drops, 'value');
        if(treatmentAdviceProperties.instruction)
            this.instructionsList.selectRecord(treatmentAdviceProperties.instruction, 'value');
        if(treatmentAdviceProperties.timings)
            this.timingsList.selectRecord(treatmentAdviceProperties.timings, 'value');
        if(treatmentAdviceProperties.duration)
            this.selectDurationForEdit(treatmentAdviceProperties.duration);
    },
});