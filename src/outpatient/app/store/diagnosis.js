Ext.define('Jss.Outpatient.store.diagnosis', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.Diagnosis',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/diagnosis.json'
        }
    }
});