Ext.define('Jss.Outpatient.model.Patient', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'id',
                type: 'string'
            }, {
                name: 'firstName',
                type: 'string'
            }, {
                name: 'lastName',
                type: 'string'
            },{
                name: 'gender',
                type: 'string'
            }, {
                name: 'age',
                type: 'int'
            }, {
                name: 'weight',
                type: 'string',
            }, {
                name: 'village',
                type: 'string',
            }, {
                name: 'visits',
                type: 'auto'
            }]
    }
});
