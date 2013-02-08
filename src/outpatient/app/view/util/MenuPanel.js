Ext.define('Jss.Outpatient.view.util.MenuPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.menuPanel',

    config: {
        layout: 'vbox',
        hideOnMaskTap:true,
        modal:true,
        showAnimation:'fadeIn',
        left:0,
        padding:10,
    },

    initialize: function() {
        var self = this;
        this.config.menuOptions.forEach(function(menuOption) {
            self.addButton(menuOption)
        });

        this.on('hide', function() {this.destroy()}, this);
    },

    addButton: function(options) {
        var button = Ext.create('Ext.Button',{
            text: options.displayText,
            margin: 5,
            flex:1,
        });

        if(options.iconCls) {
            button.setIconCls(options.iconCls);
            button.setIconMask(true);
        }

        button.on('tap', function() { this.tapped(options.tapEventName) }, this);
        this.add(button);

    },

    tapped: function(tapEventName) {
        this.fireEvent(tapEventName);
        this.destroy();
    }
});
