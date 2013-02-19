Ext.define('Jss.Outpatient.store.history.HistoryConcepts', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Jss.Outpatient.model.concept.Concept',
        autoLoad:false,
        proxy: {
            type: 'ajax',
            url: '',
			noCache: false
        }
    }
});