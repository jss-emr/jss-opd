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
        var props = this.treatmentAdviceProperties();
        return this.medicineDetails.data.name + " | " + props.spec + " | " + props.instruction + " | " + props.timings.toString() + " | " + props.quantity;
    },

    treatmentAdviceProperties:function () {
        return {
            spec: this.specsList != undefined ? this.specsList.getSelectedValue() : null,
            instruction:this.instructionsList.getSelectedValue(),
            timings:this.timingsList.getSelectedValue(),
            quantity: this.quantityList.getSelectedValue(),
        }
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

});