Ext.define('Jss.Outpatient.store.instruction.AllInstructions', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.concept.Concept',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'http://localhost:8080/concept?name=der&category=Instruction',
			noCache: false
        }
    }
});