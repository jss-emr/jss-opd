Ext.define('Jss.Outpatient.store.chiefcomplaints', {
    extend: 'Ext.data.Store',
        model: 'Jss.Outpatient.model.ChiefComplaint',
        autoLoad: true,
        proxy: {
        type: 'ajax',
        url: 'data/chiefcomplaints.json'
    },
    config: {}
});