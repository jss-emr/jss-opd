Ext.define('Jss.Outpatient.view.concept.NumericUIElement', {
    extend:'Ext.form.Panel',

    config:{
        height:50,
        flex:1,
        layout:'fit',
    },

    for: function(concept) {
        var numberfield = Ext.create('Ext.field.Number',{
            height: 50,
            label: concept.name,
            name:"value",
        });

        this.add({
            xtype:'fieldset',
            items: [numberfield]
        })

        return this;
    }
});