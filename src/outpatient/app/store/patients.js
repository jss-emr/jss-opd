Ext.define('Jss.Outpatient.store.patients', {
    extend: 'Ext.data.Store',
    requires: ['Jss.Outpatient.model.Patient'],
    model: 'Jss.Outpatient.model.Patient',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'data/patients.json'
    },
    config: {}
});