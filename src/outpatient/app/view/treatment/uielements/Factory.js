Ext.define('Jss.Outpatient.view.treatment.uielements.Factory', {

    requires : [
        'Jss.Outpatient.view.treatment.uielements.DrugUIElement',
        'Jss.Outpatient.view.treatment.uielements.InjectionUIElement',
        'Jss.Outpatient.view.treatment.uielements.SyrupUIElement',
        'Jss.Outpatient.view.treatment.uielements.BaseUIElement',

    ],

    get:function (medicineDetails) {
        if(medicineDetails.get('type') == "TAB")
            return Ext.create('Jss.Outpatient.view.treatment.uielements.DrugUIElement').for(medicineDetails);
        if(medicineDetails.get('type') == "INJ")
            return Ext.create('Jss.Outpatient.view.treatment.uielements.InjectionUIElement').for(medicineDetails);
        if(medicineDetails.get('type') == "SYP")
            return Ext.create('Jss.Outpatient.view.treatment.uielements.SyrupUIElement').for(medicineDetails);
    },

    _instructionsList:[
        "Once a day",
        "Twice a day",
        "Thrice a day",
        "four times a day",
        "six times a day",
        "before sleep",
        "Before meal",
        "After meal",
        "With meals",
        "Weekly",
        "twice a Week",
        "Thrice a week",
        "Once in three weeks",
        "Monthly",
        "S.O.S",
    ]
});