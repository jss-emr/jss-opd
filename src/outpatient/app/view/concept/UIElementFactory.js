Ext.define('Jss.Outpatient.view.concept.UIElementFactory', {

    requires : [
        'Jss.Outpatient.view.concept.NumericUIElement',
        'Jss.Outpatient.view.concept.DurationUIElement',
        'Jss.Outpatient.view.concept.CodedUIElement',
        'Jss.Outpatient.view.concept.ComplexUIElement'
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
    }
});
