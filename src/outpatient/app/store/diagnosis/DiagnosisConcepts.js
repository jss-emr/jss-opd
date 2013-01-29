Ext.define('Jss.Outpatient.store.diagnosis.DiagnosisConcepts', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.concept.Concept',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/allDiagnoses.json'
        }
    }
});
