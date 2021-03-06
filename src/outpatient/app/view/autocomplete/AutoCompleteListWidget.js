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
        this.category = this.config.category;
        this.list = Ext.create('Ext.dataview.List', {
            store: this.config.store,
            height: 380,
            itemTpl: this.config.itemTpl,
            bubbleEvents: 'select',
        });

        this.store = this.list.getStore();

        this.add(this.list);
    },

    loadData: function(keyword, onLoadCallBack) {
        this.store.getProxy().setUrl("/opd-service/concept?name="+keyword+"&category=" + this.category);
        this.store.load({
            callback: function(records, operation, success) {
                if(!success) //as of sencha 2.1, if server returns empty array, its not a success.
                    this.store.setData([]);
                if(onLoadCallBack)
                    onLoadCallBack();
            },
            scope: this
        });
        this.show();
    },

    getItemTpl: function() {
        return this.list.getItemTpl();
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