Ext.define('Jss.Outpatient.view.concept.DrugUIElement', {
    extend:'Jss.Outpatient.view.concept.BaseUIElement',


    for:function (concept) {
        this.concept = concept;
        this.drugfield = Ext.create('Jss.Outpatient.view.autocomplete.AutoCompleteWidget', {
            placeHolder:'Search...',
            store: 'MedicineDetails',
            itemTpl: '{name}',
            filterKey: 'name',
        });

        this.add(this.drugfield);
        return this;
    },

    getValue:function () {
        var ob = Ext.create('Jss.Outpatient.model.concept.Observation', {
            concept:this.concept,
            value: this.drugfield.getValue()
        });
        ob.setSummary();
        return ob;
    },

    getSummary:function () {
        return this.concept.data.name + ":" + this.numberfield.getValue();
    },

    setValueFrom: function(observation) {
        this.drugfield.setConcept(observation);
    },
});