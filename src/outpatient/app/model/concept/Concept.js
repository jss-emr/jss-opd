Ext.define('Jss.Outpatient.model.concept.Concept', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: "name"},
            {name: "id"},
            {name: "properties", type: "auto"},
        ]
    },
});