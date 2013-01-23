Ext.define('Jss.Outpatient.view.treatment.uielements.Factory', {

    requires : [
        'Jss.Outpatient.view.treatment.uielements.DrugUIElement',
    ],

    get:function (medicineDetails) {
        if(medicineDetails.get('type') == "TAB")
            return Ext.create('Jss.Outpatient.view.treatment.uielements.DrugUIElement').for(medicineDetails);
        if(medicineDetails.get('type') == "INJ")
            return Ext.create('Jss.Outpatient.view.treatment.uielements.InjectionUIElement').for(medicineDetails);
    },
});