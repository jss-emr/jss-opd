Ext.define('Jss.Outpatient.store.treatment', {
    extend: 'Ext.data.Store',
    //requires: ['Jss.Outpatient.model.Patient'],
    config: {
        model: 'Jss.Outpatient.model.Treatment',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/treatment.json'
        },

    }
//    config: {}
});