Ext.define('Jss.Outpatient.model.DiseaseTemplate', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['name', {name: 'sections', type: 'auto'}]
    }
});
