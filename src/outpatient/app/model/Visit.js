Ext.define('Jss.Outpatient.model.Visit', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'patientid',
                type: 'string'
            },{
                name: 'date',
                type: 'string'
            }, {
                name: 'chiefcomplaint',
                persist: false,
                model: 'Jss.Outpatient.model.ChiefComplaint'
            }]
    }
});
