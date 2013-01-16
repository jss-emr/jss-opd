Ext.define('Jss.Outpatient.view.autocomplete.AutoCompleteWidget', {
    extend:'Ext.Container',
    alias:'widget.autoComplete',
    requires:[ 'Jss.Outpatient.view.autocomplete.AutoCompleteListWidget' ],

    config:{
        scroll:'both',
    },

    initialize: function() {
        this.addSearchField();
        this.addAutoCompleteList();
    },

    addSearchField: function() {
        this.searchField = Ext.create('Ext.field.Text', {
            width:'100%',
            height:50,
            bubbleEvents: 'clearicontap'
        });
        var fieldSet = Ext.create('Ext.form.FieldSet');


        this.searchField.on('keyup', 'onKeyUp', this);
        this.searchField.on('clearicontap', 'clear', this);

        fieldSet.add(this.searchField);
        this.add(fieldSet);
    },

    addAutoCompleteList: function(){
        this.autoCompleteList = Ext.create('Jss.Outpatient.view.autocomplete.AutoCompleteListWidget',{
            hidden:true,
            width:'100%',
            height:300,
            itemTpl: this.config.itemTpl,
            filterKey: this.config.filterKey
        });

        this.autoCompleteList.on('select', 'onItemSelection', this);
        this.add(this.autoCompleteList);
    },

    onItemSelection : function(list,record){
        this.autoCompleteList.hide();
        this.searchField.setValue(list.getItemTpl().apply(record.data))
        this.fireEvent('itemSelected',record);
    },

    onKeyUp : function(){
        this.autoCompleteList.destroy();
        this.addAutoCompleteList();
        var keyword = this.searchField.getValue();
        this.autoCompleteList.loadData(keyword, this.config.store);
        this.autoCompleteList.show();
    },

    clear: function() {
        this.searchField.setValue('');
        this.autoCompleteList.destroy();
    }
});


