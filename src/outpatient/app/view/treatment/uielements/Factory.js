Ext.define('Jss.Outpatient.view.treatment.uielements.Factory', {

    requires : [
        'Jss.Outpatient.view.treatment.uielements.DrugUIElement',
        'Jss.Outpatient.view.treatment.uielements.InjectionUIElement',
        'Jss.Outpatient.view.treatment.uielements.SyrupUIElement',
        'Jss.Outpatient.view.treatment.uielements.BaseUIElement',
        'Jss.Outpatient.view.treatment.uielements.DropsUIElement',
        'Jss.Outpatient.view.treatment.uielements.CreamUIElement',
        'Jss.Outpatient.view.treatment.uielements.DefaultUIElement',

    ],

    get:function (medicineDetails) {
        switch(medicineDetails.get('type')) {
            case "TAB":
            case "CAP":
                return Ext.create('Jss.Outpatient.view.treatment.uielements.DrugUIElement').for(medicineDetails);
            case "INJ":
                return Ext.create('Jss.Outpatient.view.treatment.uielements.InjectionUIElement').for(medicineDetails);
            case "SYP":
                return Ext.create('Jss.Outpatient.view.treatment.uielements.SyrupUIElement').for(medicineDetails);
            case "DROPS":
            case "DROP":
                return Ext.create('Jss.Outpatient.view.treatment.uielements.DropsUIElement').for(medicineDetails);
            case "CREM":
            case "OINT":
                return Ext.create('Jss.Outpatient.view.treatment.uielements.CreamUIElement').for(medicineDetails);
        }
        return Ext.create('Jss.Outpatient.view.treatment.uielements.DefaultUIElement').for(medicineDetails);
    },

    getObject: function(medicineDetails) {
        switch(medicineDetails.get('type')) {
            case "TAB":
            case "CAP":
                return Ext.create('Jss.Outpatient.view.treatment.uielements.DrugUIElement');
            case "INJ":
                return Ext.create('Jss.Outpatient.view.treatment.uielements.InjectionUIElement');
            case "SYP":
                return Ext.create('Jss.Outpatient.view.treatment.uielements.SyrupUIElement');
            case "DROPS":
            case "DROP":
                return Ext.create('Jss.Outpatient.view.treatment.uielements.DropsUIElement');
            case "CREM":
            case "OINT":
                return Ext.create('Jss.Outpatient.view.treatment.uielements.CreamUIElement');
        }
        return Ext.create('Jss.Outpatient.view.treatment.uielements.DefaultUIElement');
    }
});