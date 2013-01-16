Ext.define('Jss.Outpatient.store.history.Concepts', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Jss.Outpatient.model.history.Concept',
        autoLoad:true,
        proxy: {
            type: 'ajax',
            url: 'data/allConcepts.json'
        }
    }
});