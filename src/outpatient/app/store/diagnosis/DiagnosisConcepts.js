Ext.define('Jss.Outpatient.store.diagnosis.DiagnosisConcepts', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.concept.Concept',
        autoLoad: false,
        proxy: {
            type: 'ajax',
            url: '',
			noCache: false ,
            actionMethods: {
                read   : 'GET' // by default GET
            }        }
    }
});
