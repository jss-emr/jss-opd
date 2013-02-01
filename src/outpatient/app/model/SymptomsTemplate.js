Ext.define('Jss.Outpatient.model.SymptomsTemplate', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['name', {name: 'sections', type: 'auto'}]
    }
});
