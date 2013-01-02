Ext.define('Jss.Outpatient.model.VitalStats', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['height', 'weight', 'bmi', 'bp', 'pulse', 'resrate', 'temp', 'oxysat']
    }
});