Ext.define('Jss.Outpatient.model.history.Observation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: "concept", type: "auto"},
            {name: "properties", type: "auto"},
            {name: "summary", type: "string"},
        ]
    },
});