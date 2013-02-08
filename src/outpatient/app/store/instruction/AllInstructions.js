Ext.define('Jss.Outpatient.store.instruction.AllInstructions', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.concept.Concept',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/allInstructions.json',
			noCache: false
        }
    },

    addFrom:function(name){
        var concept =  this.add({ name: "'" + name + "'", id: "127.0UUID", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}});
        this.sync();

//        var concept = this.getModel().makeFor(name);
//        this.add(concept);
        return concept;
    }
});