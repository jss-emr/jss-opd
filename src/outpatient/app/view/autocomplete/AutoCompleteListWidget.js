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
            height: 280,
            itemTpl: this.config.itemTpl,
            bubbleEvents: 'select',
        });

        this.add(this.list);
    },

    loadData: function(keyword) {
        console.log(this.category);
        if(keyword.length == 0){
            this.hide();
            return;
        }

        //this.list.getStore().filter(this.config.filterKey, keyword, true);


        this.list.getStore().getProxy().setUrl("http://localhost:8080/concept?name="+keyword+"&category=" + this.category);
//        this.list.getStore().getProxy().setUrl("http://localhost:8080/concept?name=herpes&category=Diagnosis");

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