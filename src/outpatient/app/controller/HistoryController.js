Ext.define('Jss.Outpatient.controller.HistoryController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            historySummaryPanel: '#historySummaryPanel',
            observationsPanel: '#observationsPanel',
            conceptSelectionField: '#conceptSelectionField',
        },
        control: {
            historySummaryPanel: {
                jsstouchstart: 'gotoEditPage'
            },
            conceptSelectionField: {
                initialize: 'flagInitialize',
                change: 'conceptSelected'

            }
        }
    },

    gotoEditPage:function () {
        Ext.getCmp('mainview').push(Ext.getCmp('historyEditPanel'));
    },

    flagInitialize: function() {
        this.conceptSelectionFieldJustInitialized = true;
    },

    conceptSelected: function() {
        if(this.conceptSelectionFieldJustInitialized == true) {
            this.conceptSelectionFieldJustInitialized = false;
            return false;
        }

        var factory = Ext.create('Jss.Outpatient.view.concept.UIElementFactory');
        var concept = this.getConceptSelectionField().getRecord().data;
        var uiElement = factory.get(concept);
        if(uiElement != undefined) {this.getObservationsPanel().add([uiElement])};
    }
});