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

    initialize: function() {
        this.list = Ext.create('Ext.dataview.List', {
            store: this.config.store,
            height: 280,
            itemTpl: this.config.itemTpl,
            bubbleEvents: 'select',
        });

        this.add(this.list);
    },

    loadData: function(keyword) {
        if(keyword.length == 0){
            this.hide();
            return;
        }

        this.list.getStore().filter(this.config.filterKey, keyword);
        this.list.getStore().load();
        this.show();
    },

    hasNoSuggestions:function(){
        return this.list.getStore().getCount() == 0;
    },

    getStore:function(){
        return this.list.getStore();
    },

    addFrom:function(name){
        var store = this.list.getStore();
        store.add({name: name, properties:{ datatype: {name: "N/A"}}});
        return store.getAt(store.getCount()-1);
    }
})