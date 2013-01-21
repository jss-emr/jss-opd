Ext.define('Jss.Outpatient.view.treatment.uielements.Factory', {

    requires : [
        'Jss.Outpatient.view.treatment.uielements.DrugUIElement',
    ],

    get:function (medicineDetails) {
        return Ext.create('Jss.Outpatient.view.treatment.uielements.DrugUIElement').for(medicineDetails);
    },
});