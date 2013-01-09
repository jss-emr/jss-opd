Ext.Loader.setPath({
    'Ext.ux.touch.grid': '../lib/touch/Ext.ux.touch.grid'
});

Ext.require([
    'Ext.ux.touch.grid.List',
    'Ext.ux.touch.grid.feature.Feature',
    'Ext.ux.touch.grid.feature.Editable',
    'Ext.ux.touch.grid.feature.Sorter'
]);

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.i18n': 'lib/i18n'
    }
});

Ext.application({
    name: 'Jss.Outpatient.Treatment',
    models: ['MedicineDetail', 'TreatmentAdvice'],
    stores: ['MedicineDetails', 'TreatmentAdvice'],
    views: [
        'Viewport', 
        'TreatmentAdviceGrid', 
        'AddTreatmentAdvice',
        'new.AddTreatmentAdviceDetailsPanel', 
        'new.AutocompleteListBox', 
        'new.AutocompleteContainer',
        'new.ArraySelectionBox'
    ],
    controllers: ['DrugSearchAutocomplete'],

    launch: function () {
        Ext.create('Jss.Outpatient.Treatment.view.Viewport');
    }
});