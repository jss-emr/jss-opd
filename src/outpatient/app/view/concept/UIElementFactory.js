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
        var object = this.getObject(concept);
        if(object)
            return object.for(concept);
        return undefined;
    },

    getObject: function(concept) {
        var datatype = (concept.data.properties.datatype instanceof Object) ? concept.data.properties.datatype.name : concept.data.properties.datatype;
        var conceptClass = concept.data.properties.conceptClass ;
        if (datatype == "Numeric") {
            return this.numeric(concept);
        }
        if (datatype == "Duration") {
            return this.duration(concept);
        }
        if (datatype == "Coded") {
            var answers = concept.data.properties.datatype.properties.answers
            if(answers == undefined || answers.length == 0){
                return this.simple(concept);
            }
                
            return this.coded(concept);
        }
        if (datatype == "Complex") {
            return this.complex(concept);
        }
        if (datatype == "N/A") {
            if(conceptClass == "Procedure"){
                return this.procedure(concept);
            }
            return this.simple(concept);
        }
        if (datatype == "Boolean") {
            return this.booleanConcept(concept);
        }
        if (datatype == "Drug") {
            return this.drugConcept(concept);
        }
    },

    numeric:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.NumericUIElement');
    },

    duration:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.DurationUIElement');
    },

    coded:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.CodedUIElement');
    },
    complex:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.ComplexUIElement');
    },
    simple:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.SimpleUIElement');
    }, 
    booleanConcept:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.BooleanUIElement');
    },
    drugConcept:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.DrugUIElement');
    },
    procedure:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.ProcedureUIElement');
    }
});
