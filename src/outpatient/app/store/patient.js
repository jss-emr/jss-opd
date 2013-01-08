Ext.define('Jss.Outpatient.store.patient', {
    extend: 'Ext.data.Store',
    //requires: ['Jss.Outpatient.model.Patient'],
    config: {
        model: 'Jss.Outpatient.model.Patient',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/patient.json'
        },

    }
//    config: {}
});