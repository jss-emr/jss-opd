Ext.define('Jss.Outpatient.view.treatment.uielements.DefaultUIElement', {
    extend:'Jss.Outpatient.view.treatment.uielements.BaseUIElement',

    for:function (medicineDetails) {
        this.medicineDetails = medicineDetails;
        return this;
    },

    isDefault: function() {
        return true;
    },

    getSummary:function () {
        return {full: [this.medicineDetails.get('name')], short: [this.medicineDetails.get('name')] };
    },

    treatmentAdviceProperties:function () {
        return {}
    },
});