Ext.define('Jss.Treatment.view.Viewport', {
    extend: 'Ext.navigation.View',

    requires: ['Jss.Treatment.view.TreatmentAdviceGrid'],

    config: {
        autoDestroy: false,
        fullscreen: true,
        items: [
            {xtype : 'treatment_advice_grid'}
        ]
    }
});
