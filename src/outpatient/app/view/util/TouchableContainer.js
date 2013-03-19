Ext.define('Jss.Outpatient.view.util.TouchableContainer', {
    extend: 'Ext.Container',
    alias: 'widget.touchableContainer',

    initialize: function() {
        this.on({
            tap: {
                element: 'innerElement',
                scope: this,
                fn : function() {
                    this.fireEvent('containerDoubleTab');
                }
            }
        });
    },
});
