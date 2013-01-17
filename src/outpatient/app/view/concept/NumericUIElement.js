Ext.define('Jss.Outpatient.view.concept.NumericUIElement', {
    extend:'Ext.form.Panel',

    config:{
        height:50,
        flex:1,
        layout:'fit',
    },

    for: function(concept) {
        this.concept = concept;
        this.numberfield = Ext.create('Ext.field.Number',{
            height: 50,
            label: concept.name,
            name:"value",
        });

        this.add({
            xtype:'fieldset',
            items: [this.numberfield]
        })

        return this;
    },

    getValue: function() {
        return Ext.create('Jss.Outpatient.model.history.Observation', {
            concept: this.concept,
            properties: this.numberfield.getValue(),
            summary: this.getSummary(),
        });
    },

    getSummary: function() {
        return this.concept.name + ":" + this.numberfield.getValue();
    }
});