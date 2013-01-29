Ext.define('Jss.Outpatient.store.DiseaseTemplates', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.DiseaseTemplate',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/diseaseTemplates.json'
        }
    }
});
