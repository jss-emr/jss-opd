Ext.define('Jss.Outpatient.store.SymptomsTemplates', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.SymptomsTemplate',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/symptomsTemplate.json'
        }
    }
});
