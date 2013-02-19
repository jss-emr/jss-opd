Ext.define('Jss.Outpatient.store.instruction.AllInstructions', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.concept.Concept',
        autoLoad: false,
        proxy: {
            type: 'ajax',
            url: '',
			noCache: false
        }
    }
});