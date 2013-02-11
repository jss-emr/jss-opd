Ext.define('Jss.Outpatient.view.concept.UIElementFactory', {

    requires : [
        'Jss.Outpatient.view.concept.NumericUIElement',
        'Jss.Outpatient.view.concept.DurationUIElement',
        'Jss.Outpatient.view.concept.CodedUIElement',
        'Jss.Outpatient.view.concept.ComplexUIElement',
        'Jss.Outpatient.view.concept.SimpleUIElement',
        'Jss.Outpatient.view.concept.BooleanUIElement',
        'Jss.Outpatient.view.concept.DrugUIElement'
    ],

    get:function (concept) {
        var datatype = (concept.data.properties.datatype instanceof Object) ? concept.data.properties.datatype.name : concept.data.properties.datatype;
        if (datatype == "numeric") {
            return this.numeric(concept);
        }
        if (datatype == "duration") {
            return this.duration(concept);
        }
        if (datatype == "coded") {
            return this.coded(concept);
        }
        if (datatype == "complex") {
            return this.complex(concept);
        }
        if (datatype == "N/A") {
            return this.simple(concept);
        }
        if (datatype == "boolean") {
            return this.booleanConcept(concept);
        }
        if (datatype == "drug") {
            return this.drugConcept(concept);
        }
    },

    numeric:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.NumericUIElement').for(concept);
    },

    duration:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.DurationUIElement').for(concept);
    },

    coded:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.CodedUIElement').for(concept);
    },
    complex:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.ComplexUIElement').for(concept);
    } ,
    simple:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.SimpleUIElement').for(concept);
    }, 
    booleanConcept:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.BooleanUIElement').for(concept);
    },
    drugConcept:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.DrugUIElement').for(concept);
    }
});
