Ext.define('Jss.Outpatient.model.concept.Observation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: "concept", type: "auto"},
            {name: "value", type: "auto"},
            {name: "summary", type: "string"}
        ]
    },

    setSummary: function () {
        var concept = this.get('concept');
        var unit = concept.getUnit();
        this.set('summary', concept.get('name') + ' - ' + this.get('value') + ' ' + unit);
    }
});