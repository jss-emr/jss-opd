Ext.define('Jss.Outpatient.model.history.Observation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: "concept", type: "auto"},
            {name: "values", type: "auto"},
        ]
    },
});