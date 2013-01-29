Ext.define('Jss.Outpatient.view.observation.ObservationQueue', {
    extend: 'Ext.Container',

    config: {
        width: '100%',
        height: 500,
        layout: 'vbox',
        margin: "10 0 0 0",
        cls: 'observationQueue',
    },

    initialize: function() {
        this.queuePanel = this.createObservationQueuePanel();
        if(this.queuePanel.getStore().getCount() == 0) {
            this.hide();
        }
    },

    createObservationQueuePanel: function() {
        var widget = Ext.create('Ext.dataview.List', {
            store: this.config.store,
            itemTpl: this.config.itemTpl,
            width: '100%',
            height: 400,
        });

        widget.on('select', this.itemSelected, this);
        this.add([
            widget,
            {xtype: 'titlebar', title: 'In Queue', docked: 'top'}
        ]);
        return widget;
    },

    itemSelected: function(list, record) {
        this.fireEvent('queueItemSelected', record);
    },

    addData: function(records) {
        this.queuePanel.getStore().add(records);
        this.show();
    },

    removeData: function(fieldName, fieldValue) {
        var store = this.queuePanel.getStore();
        var record = store.findRecord(fieldName, fieldValue);
        if(record != null)
            store.remove(record);
        if(store.getCount() == 0)
            this.hide();
    },
});