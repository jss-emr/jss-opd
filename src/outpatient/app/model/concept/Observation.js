Ext.define('Jss.Outpatient.model.concept.Observation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: "concept", type: "auto"},
            {name: "value", type: "auto"},
            {name: "summary", type: "string"},
            {name: "name", type:"string"}
        ]
    },

    setSummary: function () {
        var concept = this.get('concept');
        var unit = concept.getUnit();
        if(this.get('value') === null) {
            this.set('summary', null);
        } else {
            this.set('summary', concept.get('name') + ' - ' + this.get('value') + ' ' + unit);
        }
        this.set('name',concept.get('name'));
    }
});