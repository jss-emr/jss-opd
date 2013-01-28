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
        return this.medicineDetails.data.name
    },

    treatmentAdviceProperties:function () {
        return {}
    },
});