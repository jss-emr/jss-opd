Ext.define('Jss.Outpatient.view.history.HistorySummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias:'widget.historySummary',
    config: {
        layout: 'fit',
        items: [{
            xtype: 'container',
            html: 'History',
            style: 'background-color: lightgrey',
        }]
    }
});