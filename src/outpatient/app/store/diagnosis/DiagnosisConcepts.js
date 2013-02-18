Ext.define('Jss.Outpatient.store.diagnosis.DiagnosisConcepts', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.concept.Concept',
        autoLoad: false,
        proxy: {
            type: 'ajax',
            url: 'http://localhost:8080/concept?name=der&category=Diagnosis',
			noCache: false ,
            actionMethods: {
                read   : 'GET' // by default GET
            }        }
    }
});
