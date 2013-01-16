Ext.define('Jss.Outpatient.model.history.Concept', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: "name"},
            {name: "properties", type: "auto"},
        ]
    },
});