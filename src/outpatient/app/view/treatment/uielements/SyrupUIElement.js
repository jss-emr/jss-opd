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

    addQuantityList:function () {
        var arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 20, 25, 30, 35, 40, 45, 50, 55].map(function(elem) {return elem + "ml"});
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