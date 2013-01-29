Ext.define('Jss.Outpatient.store.instruction.AllInstructions', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.Instruction',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/allInstructions.json',
			noCache: false
        }
    }
});
