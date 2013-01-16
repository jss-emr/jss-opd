Ext.define('Jss.Outpatient.view.autocomplete.AutoCompleteListWidget', {
    extend: 'Ext.Panel',
    alias: 'widget.jssAutoCompleteList',

    config: {
        cls: "x-simulator-popup",
        floating: true,
        top: 50,
        left: 0,
        items: []
    },

    loadData: function(keyword, store) {
        var self = this;
        var list = Ext.create('Ext.dataview.List', {
            store: store,
            height: 280,
            itemTpl: this.config.itemTpl,
            bubbleEvents: 'select',
        });

        list.getStore().filter(this.config.filterKey, keyword);
        list.getStore().load();
        this.add(list);
    },

    getSelectedRecord: function() {
        return this.selectedRecord;
    }
})