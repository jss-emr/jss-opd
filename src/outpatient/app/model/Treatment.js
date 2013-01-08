Ext.define('Jss.Outpatient.model.Treatment', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
           {
                name: 'name',
                type: 'string'
            }, {
                name: 'dosage',
                type: 'string'
            },{
                name: 'quantity',
                type: 'string'
            }, {
                name: 'time',
                type: 'string'
            }]
    }
});
