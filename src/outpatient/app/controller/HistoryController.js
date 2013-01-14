Ext.define('Jss.Outpatient.controller.HistoryController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            historySummaryPanel: '#historySummaryPanel',
        },
        control: {
            historySummaryPanel: {
                jsstouchstart: 'gotoEditPage'
            }
        }
    },

    gotoEditPage:function () {
        Ext.getCmp('mainview').push(Ext.getCmp('historyEditPanel'));
    }
})
