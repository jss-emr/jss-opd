Ext.define('Jss.Outpatient.view.concept.UIElementFactory', {

    requires : [
        'Jss.Outpatient.view.concept.NumericUIElement',
        'Jss.Outpatient.view.concept.DurationUIElement'
    ],

    get:function (concept) {
        var datatype = (concept.data.properties.datatype instanceof Object) ? concept.data.properties.datatype.name : concept.data.properties.datatype;
        if (datatype == "numeric") {
            return this.numeric(concept);
        }
        if (datatype == "duration") {
            return this.duration(concept);
        }
    },

    numeric:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.NumericUIElement').for(concept);
    },

    duration:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.DurationUIElement').for(concept);
    }
});
