Ext.define('Jss.Outpatient.model.Consultation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'patient',
                type: 'Patient'
            }, {
                name: 'visit',
                type: 'Visit'
            }]
    }
});
