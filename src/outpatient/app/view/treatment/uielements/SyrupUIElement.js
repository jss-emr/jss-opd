Ext.define('Jss.Outpatient.view.treatment.uielements.SyrupUIElement', {
    extend:'Jss.Outpatient.view.treatment.uielements.BaseUIElement',

    for:function (medicineDetails) {
        this.medicineDetails = medicineDetails;
        this.specsList = this.addSpecsList();
        this.instructionsList = this.addInstructionList();
        this.quantityList = this.addQuantityList();
        this.timingsList = this.addTimingsList();
        return this;
    },

    getSummary:function () {
        var props = this.treatmentAdviceProperties;
        return {full: [this.medicineDetails.get('name'), props.spec, props.instruction, props.timings.toString(), props.quantity],
                short: [this.medicineDetails.get('name'), props.spec, props.timings.toString()] };
    },

    getTreatmentAdviceProperties:function () {
        this.treatmentAdviceProperties = {
            spec: this.specsList != undefined ? this.specsList.getSelectedValue() : null,
            instruction:this.instructionsList.getSelectedValue(),
            timings:this.timingsList.getSelectedValue(),
            quantity: this.quantityList.getSelectedValue(),
        }
        return this.treatmentAdviceProperties;
    },

    addSpecsList:function () {
        if (this.medicineDetails.data.specs == null) {
            return null;
        }
        return this.addSelectionBox(this.medicineDetails.data.specs, "Specs", "25%").autoSelectSingleElement();
    },

    addQuantityList:function () {
        var arrayData = ["1 bottle", "2 bottle", "3 bottle"];
        return this.addSelectionBox(arrayData, "Dosage", "25%");
    },

    showForEdit: function(treatmentAdviceProperties) {
        this.specsList.selectRecord(treatmentAdviceProperties.spec, 'value');
        this.quantityList.selectRecord(treatmentAdviceProperties.quantity, 'value');
        if(treatmentAdviceProperties.instruction)
            this.instructionsList.selectRecord(treatmentAdviceProperties.instruction, 'value');
        if(treatmentAdviceProperties.timings)
            this.timingsList.selectRecord(treatmentAdviceProperties.timings, 'value');
    },
});