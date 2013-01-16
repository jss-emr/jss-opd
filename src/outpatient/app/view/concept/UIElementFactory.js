Ext.define('Jss.Outpatient.view.concept.UIElementFactory', {

    requires : ['Jss.Outpatient.view.concept.NumericUIElement'],

    get:function (concept) {
        datatype = (concept.properties.datatype instanceof Object) ? concept.properties.datatype.name : concept.properties.datatype;
        if (datatype == "numeric") {
            return this.numeric(concept);
        }
    },

    numeric:function (concept) {
        return Ext.create('Jss.Outpatient.view.concept.NumericUIElement').for(concept);
    }
});