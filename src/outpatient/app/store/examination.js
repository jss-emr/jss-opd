Ext.define('Jss.Outpatient.store.examination', {
    extend: 'Ext.data.Store',
    //requires: ['Jss.Outpatient.model.Patient'],
    config: {
        model: 'Jss.Outpatient.model.ChiefComplaint',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/chiefcomplaints.json'
        },

    }
//    config: {}
});