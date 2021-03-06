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
        var props = this.treatmentAdviceProperties;
        return {full: [this.medicineDetails.get('name'), props.spec, props.instruction, props.dosage, props.timings.toString(), props.duration],
                short: [this.medicineDetails.get('name'), props.spec, props.timings.toString()] };
    },

    getTreatmentAdviceProperties:function () {
        this.treatmentAdviceProperties = {
            spec: this.specsList != undefined ? this.specsList.getSelectedValue() : null,
            instruction:this.instructionsList.getSelectedValue(),
            dosage:this.dosageList.getSelectedValue(),
            timings:this.timingsList.getSelectedValue(),
            duration: this.getDuration()
        }

        return this.treatmentAdviceProperties;
    },


    addDosageList:function () {
        if(this.medicineDetails.get('type') == "CAP")
            var arrayData = ["1", "2", "3"];
        if(this.medicineDetails.get('type') == "TAB")
            var arrayData = ["1/4", "1/3", "1/2", "2/3", "3/4", "1", "2", "3"];
        return this.addSelectionBox(arrayData, "Dosage", "15%");
    },

    showForEdit: function(treatmentAdviceProperties) {
        this.specsList.selectRecord(treatmentAdviceProperties.spec, 'value');
        this.dosageList.selectRecord(treatmentAdviceProperties.dosage, 'value');
        if(treatmentAdviceProperties.instruction)
            this.instructionsList.selectRecord(treatmentAdviceProperties.instruction, 'value');
        if(treatmentAdviceProperties.timings)
            this.timingsList.selectRecord(treatmentAdviceProperties.timings, 'value');
        if(treatmentAdviceProperties.duration)
            this.selectDurationForEdit(treatmentAdviceProperties.duration);
    },
});