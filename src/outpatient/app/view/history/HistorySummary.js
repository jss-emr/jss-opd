Ext.define('Jss.Outpatient.view.history.HistorySummary', {
    extend: 'Ext.Container',
    alias:'widget.historySummary',
    config: {
        layout: 'fit',
        items: [{
            xtype: 'container',
            html: 'History',
            style: 'background-color: lightgrey',
            listeners: {
                touchstart: {
                    element: 'innerElement',
                    fn: function(event, div, listener)
                    {
                        var l = Ext.getCmp('mainview');
                        l.push(Ext.getCmp('historyEditPanel'));
                    }
                }
            }
        }]
    }
});