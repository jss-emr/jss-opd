Ext.define('Jss.Outpatient.view.util.TouchableLabel', {
    extend: 'Ext.Label',
    alias: 'widget.touchableLabel',

    initialize: function() {
        this.on({
            tap: {
                element: 'innerElement',
                scope: this,
                fn : function() {
                    this.fireEvent('labelTap');
                }
            }
        });
    },
});
